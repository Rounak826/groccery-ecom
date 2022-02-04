import { Navigate } from 'react-router-dom';
import {useAuth} from './Context/AuthContext';

export default function UnVerifiedRoute({ children }) {
    const {currentUser} = useAuth();

      return currentUser? !currentUser.emailVerified ? children : <Navigate to="/"/> : <Navigate to="/login"/>;
    
  }