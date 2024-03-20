import { useState } from "react";

export interface TextInputErorType{
    isError: boolean;
    message: string;
}

export interface LoginDetailsType{
    email: string;
    password: string;
}

export function useLoginForm():{
    loginDetails: LoginDetailsType;
    emailError: TextInputErorType;
    passwordError: TextInputErorType;
    login: () => void;
    onChangeEmail: (text: string) => void;
    onChangePassword: (text: string) => void;
}{
    const DEFAULT_ERROR: TextInputErorType = {
        isError: false, 
        message: '',
    };

    const DEFAULT_LOGIN_DETAILS: LoginDetailsType = {
        email: '', 
        password: ''
    }

    const [loginDetails, setLoginDetails] = useState(DEFAULT_LOGIN_DETAILS);

    const [emailError, setEmailError] = useState(DEFAULT_ERROR);
    const [passwordError, setPasswordError] = useState(DEFAULT_ERROR);

    function onChangeEmail(text: string){
        setLoginDetails({...loginDetails, email: text.toLowerCase()});

        const EmailRegexp = new RegExp('[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+');
        const isValid = text === ''? true : EmailRegexp.test(text.toLowerCase());

        if(isValid){
            setEmailError(DEFAULT_ERROR);
        }else{
            setEmailError({
                isError: true,
                message: 'Invalid email',
            });
        }
    }

    function onChangePassword(text: string){
        setLoginDetails({...loginDetails, password: text});

        const isValid = text === ''? true : text.length > 5;

        if(isValid){
            setPasswordError(DEFAULT_ERROR);
        }else{
            setPasswordError({
                isError: true,
                message: 'Invalid password',
            });
        }
    }
    
    function login(){}

    return{
        loginDetails,
        emailError,
        passwordError,
        onChangeEmail,
        onChangePassword,
        login
    }
}