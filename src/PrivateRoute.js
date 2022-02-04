import { Navigate } from 'react-router-dom';
import {useAuth} from './Context/AuthContext';

export default function PrivateRoute({ children }) {
    const {currentUser} = useAuth();
    if(currentUser.emailVerified){
      return currentUser.emailVerified ? children : <Navigate to="/verify" />;
    }else{
      return currentUser? children : <Navigate to="/login" />;
    }
    
  }