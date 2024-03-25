import React, { FC } from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/LoginPage';

const LoginPage: FC = () => {
    return (
        <div>
            <Navbar />
            <Login />
        </div>
    );
}

export default LoginPage;