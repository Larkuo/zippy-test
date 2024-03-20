import React from 'react';
import {
    Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './Login.styles';
import { PrimaryInput, PrimaryButton } from '../../components';
import { useLoginForm } from '../../hooks/useLoginForm';

const ZippyLogo = require('../../assets/zippy_logo.png');


export function Login() {
    const {
        loginDetails,
        emailError,
        passwordError,
        onChangeEmail,
        onChangePassword,
        login
    } = useLoginForm();

    return (
        <SafeAreaView style={styles.loginPage}>
            <Image 
                alt='zippy-courier-logo' 
                source={ZippyLogo}
                style={styles.logo}
            />
            <View style={styles.formHeader}>
                <Text style={styles.headerTitle}>Get Started Now</Text>
                <Text>Enter your credentials to access your account</Text>
            </View>
            <View style={styles.formContainer}>
                <PrimaryInput 
                    inputType={'email'} 
                    onChangeText={onChangeEmail}
                    error={emailError}
                />
                <PrimaryInput 
                    inputType={'password'} 
                    onChangeText={onChangePassword}
                    error={passwordError}
                />
                <PrimaryButton 
                    title='Login' 
                    onPress={login}
                />
            </View>
        </SafeAreaView>
    );
}
