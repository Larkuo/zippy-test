import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './PrimaryInput.styles';
import { colors } from '../../Theme';
import { TextInputErorType } from '../../hooks/useLoginForm';

const EmailIcon = require('../../assets/icons/email_icon.png');
const EyeIcon = require('../../assets/icons/eye_icon.png');

interface PrimaryInputProps{
    inputType: 'password' | 'email' | 'text';
    label?: string;
    placeholder?: string;
    iconPath?: string;
    error?: TextInputErorType;
    onChangeText?: (text: string) => void;
    forgotPassword?: () => void;
}

export function PrimaryInput({
    inputType,
    label,
    placeholder,
    iconPath,
    error,
    onChangeText,
    forgotPassword
}:PrimaryInputProps) {
    const [hidePassword, setHidePassword] = useState(inputType === 'password');

    function toggleHidePassword(){
        inputType === 'password' && setHidePassword(!hidePassword)
    }

    function onChangeValue(text: string){
        onChangeText && onChangeText(text);
    }

    return (
        <View style={styles.inputView}>
            <View style={styles.labelContainer}>
                <Text style={styles.inputLabel}>{label || inputType}</Text>
                {error?.isError &&
                    <Text style={styles.errorText}>{error?.message}</Text>
                }
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder || `Your ${inputType}`}
                    placeholderTextColor={colors.lightGray}
                    secureTextEntry={hidePassword}
                    onChangeText={onChangeValue}
                />
                <Pressable onPress={toggleHidePassword} style={styles.iconContainer}>
                    <Image 
                        source={
                            inputType === 'email'? EmailIcon
                            : inputType === 'password'? EyeIcon
                            : iconPath && {uri: iconPath}
                        } 
                        style={styles.inputIcon} 
                    />
                </Pressable>
            </View>
            {inputType === 'password' && 
                <Text style={styles.forgotLabel} onPress={forgotPassword}>Forgot password?</Text>
            }
        </View>
    );
}
