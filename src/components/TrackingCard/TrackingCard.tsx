import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './TrackingCard.styles';

const TrackingWatermark = require('../../assets/parcel-tracking-watermark.png');
const SearchIcon = require('../../assets/icons/search_icon.png');

export function TrackingCard({search}:{search: (value: string) => void}) {
    const [searchValue, setSearchValue] = useState('');

    function onPressSearch(){
        search(searchValue);
    }
    
    return (
        <View style={styles.trackingCard}>
            <Image source={TrackingWatermark} style={styles.watermark}/>
            <Text style={styles.trackingCardTitle}>Track your parcel</Text>
            <Text style={styles.trackingCardSubtitle}>Enter your parcel tracking number</Text>
            <View style={styles.searchRow}>
                <View style={styles.searchInputContanier}>
                    <Image source={SearchIcon} style={styles.searchIcon} />
                    <TextInput
                        placeholder='Enter Tracking Number'
                        placeholderTextColor='#4D4D4E'
                        style={styles.searchInput}
                        onChangeText={(text: string) => setSearchValue(text)}
                    />
                </View>  
                <Pressable 
                    style={styles.searchButton} 
                    onPress={onPressSearch}
                >
                    <Text style={styles.buttonText}>Search Package</Text>
                </Pressable>
            </View>
        </View>
    );
}
