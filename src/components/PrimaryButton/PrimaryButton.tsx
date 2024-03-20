import React from 'react';
import { Button, Pressable, Text } from 'react-native';
import { styles } from './PrimaryButton.styles';

interface PrimaryButtonProps{
    title: string;
    onPress?: () => void;
}

export function PrimaryButton({
    title,
    onPress,
}:PrimaryButtonProps) {
    return (
        <Pressable 
            style={styles.primaryButton} 
            onPress={() => onPress && onPress()}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}
