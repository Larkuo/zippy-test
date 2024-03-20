import React from 'react'
import { Text, View } from 'react-native';
import { styles } from './OrderListHeader.styles';

export function OrderListHeader() {
    return (
        <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>Latest Orders</Text>
            <Text style={styles.listHeaderSubtitle}>See All</Text>
        </View>
    );
}
