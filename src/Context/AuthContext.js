import React, { useContext, useEffect, useState } from 'react';
import { Auth } from '../firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//create authentication Context
const AuthContext = React.createContext();

//create custom hook for using authContext
export function useAuth(){
    return useContext(AuthContext)
}
 
//Authentication Context Component
export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);
    //create New user using email and password
    
    function createUser(email ,password){
      return Auth.createUserWithEmailAndPassword(email, password)
    }
    function authenticateUser(email ,password){
      return Auth.signInWithEmailAndPassword(email,password);
    }
    
    function sendOTP(auth, phoneNumber, appVerifier){
      return Auth.signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    }
    function logout(){
      return Auth.signOut();
    }
    function forgetPassword(email){
      const auth = getAuth();
      return sendPasswordResetEmail(auth, email)
    }
    //listen for authentication change event
    useEffect(() => {
      const unsubscribe = Auth.onAuthStateChanged(user=>{
        setCurrentUser(user)
        setLoading(false);
      })
      return unsubscribe;  
    }, []); 
    //value stored in context
    const value  = {
        currentUser,
        createUser,
        authenticateUser,
        sendOTP,
        logout,
        forgetPassword
    }

  return (
      <AuthContext.Provider value={value}>
        {!loading&&children}
      </AuthContext.Provider>
  );
}
