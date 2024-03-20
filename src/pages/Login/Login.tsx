import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { styles } from './Login.styles';


export function Login() {
    return (
        <SafeAreaView style={styles.loginPage}>
            <View>
                <Text>Login</Text>
            </View>
        </SafeAreaView>
    );
}
