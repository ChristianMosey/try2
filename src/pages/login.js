import React from "react";
import logo from '../Clock-up-logo.png';
import GoogleLogin from "react-google-login";

const Login = () => {

    return (
        <div className='login'>
            <p>Welcome to ClockUP!</p>
            <img src={logo} width="250" height="173" alt={"Clock-Up-Logo"}/><br></br>
        </div>
    );
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    //id_token = googleUser.getAuthResponse().id_token;
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

export default Login;
