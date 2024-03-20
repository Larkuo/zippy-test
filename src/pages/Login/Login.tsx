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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from "@react-navigation/native";

const ZippyLogo = require('../../assets/zippy_logo.png');


export function Login({
    navigation
}:{navigation: NativeStackNavigationProp<ParamListBase>;}) {
    const {
        emailError,
        passwordError,
        onChangeEmail,
        onChangePassword,
        onPressLogin
    } = useLoginForm(navigation);

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
                    onPress={onPressLogin}
                />
            </View>
        </SafeAreaView>
    );
}
