import React from 'react';
import {useParams} from "react-router-dom";

const AuthModule: React.FC = () => {
    const {action} = useParams();


    return <div>Auth Module Loaded: {action}</div>;
}

export default AuthModule;
