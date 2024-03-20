import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from './AppFooter.styles';

const HomeIcon = require('../../assets/icons/home.png');
const MapIcon = require('../../assets/icons/map.png');
const ReceiptsIcon = require('../../assets/icons/receipts.png');


export function AppFooter() {
    return (
        <View style={styles.appFooter}>
            <Pressable style={styles.iconContainer}>
                <Image alt='home-icon' style={styles.footerIcon} source={HomeIcon}/>
            </Pressable>
            <Pressable style={styles.iconContainer}>
                <Image alt='map-icon' style={styles.footerIcon} source={MapIcon}/>
            </Pressable>
            <Pressable style={styles.iconContainer}>
                <Image alt='receipts-icon' style={styles.footerIcon} source={ReceiptsIcon}/>
            </Pressable>
        </View>
    );
}