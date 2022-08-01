import React from 'react';
import { useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <p className='text-2xl text-center'>Loading...</p>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    } 
    return children;
};

export default RequireAuth;