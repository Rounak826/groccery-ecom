import { Navigate } from 'react-router-dom';
import {useAuth} from './Context/AuthContext';

export default function PrivateRoute({ children }) {
    const {currentUser} = useAuth();
      return currentUser? currentUser.emailVerified ? children : <Navigate to="/verify" /> : <Navigate to="/" />;

  }