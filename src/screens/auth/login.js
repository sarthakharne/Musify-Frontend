import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./login.css"
import { Navigate, useNavigate, Route, Router, Routes } from 'react-router-dom';
import Library from '../library';

const clientId = '961507694914-bqe771phi2oi8n1nikemh1pihpm04m3i.apps.googleusercontent.com'

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="login-page">
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        navigate('/')
                        console.log("Here")
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>        
        </div>
    )
}
