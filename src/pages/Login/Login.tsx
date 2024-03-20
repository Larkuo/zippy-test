import React from 'react';
import {
    Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './Login.styles';
import { PrimaryButton } from '../../components';

const ZippyLogo = require('../../assets/zippy_logo.png');


export function Login() {
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
                <PrimaryButton title='Login' />
            </View>
        </SafeAreaView>
    );
}
