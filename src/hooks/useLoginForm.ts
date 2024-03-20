import { useContext, useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { UserContext } from "../context/UserContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export interface TextInputErorType{
    isError: boolean;
    message: string;
}

export interface LoginDetailsType{
    email: string;
    password: string;
}

export function useLoginForm(navigation: NativeStackNavigationProp<ParamListBase>):{
    loginDetails: LoginDetailsType;
    emailError: TextInputErorType;
    passwordError: TextInputErorType;
    onPressLogin: () => void;
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

    const {changeUserDetails, changeAuthentication} = useContext(UserContext);

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

    async function login(){
        let data: any;
        let authenticated = false;

        const loginResponse = await fetch('https://coding.zippy.com.gh/api/login', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...loginDetails}),
        });

        if(loginResponse && loginResponse.ok && loginResponse.status === 201){
            const loginResponseBody = await loginResponse.json();

            if(loginResponseBody.responseCode === '002'){
                data = loginResponseBody.data;
                authenticated = true;

                Toast.show(loginResponseBody.responseDesc, {
                    type: 'success', placement: 'top'});

                navigation.navigate('dashboard');

            }else{
                Toast.show(loginResponseBody.responseDesc, {
                    type: 'danger', placement: 'top'});
            }
        }else{
            Toast.show('Error occured while trying to login. Please try again', {
                type: 'danger',
            });
        }

        changeAuthentication(authenticated);
        changeUserDetails(data);
    }
    
    function onPressLogin(){
        if(!loginDetails.email || emailError.isError){
            setEmailError({
                isError: true,
                message: 'Invalid email',
            });

            Toast.show('Enter a valid email', {
                type: 'danger', placement: 'top'});
        }

        if(!loginDetails.password || passwordError.isError){
            setPasswordError({
                isError: true,
                message: 'Invalid password',
            });

            Toast.show('Enter a valid password', {
                type: 'danger', placement: 'top'});
        }

        if(loginDetails.email && loginDetails.password && !emailError.isError && !passwordError.isError){
            login().then(() => {});
        }

        // remove this before submitting
        navigation.navigate('dashboard');
    }

    return{
        loginDetails,
        emailError,
        passwordError,
        onChangeEmail,
        onChangePassword,
        onPressLogin,
    }
}