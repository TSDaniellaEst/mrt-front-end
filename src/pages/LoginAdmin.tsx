import React, { FC } from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/LoginPage';

const LoginPage: FC = () => {
    return (
        <div>
            <Navbar />
            <Login />
            <div className='text-[#f87171]'> 
                <div className='text-center flex flex-col justify-center'>
                    <p className='font-bold text-[#f87171] p-2'> 
                        This is the Login Page
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;