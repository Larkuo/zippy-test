import React, { useContext } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import { UserContext } from '../../context/UserContext';
import { styles } from './Dashboard.styles';
import { TrackingCard } from '../../components';

export function Dashboard() {
    const {userDetails} = useContext(UserContext);

    function search(value: string){}

    const ORDER_DATA = [
        {receiver: 'Hagan Kwame', pickup: 'East Legon', destination: 'Dzorwulo', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'in progress'},
        {receiver: 'Hagan Kwame', pickup: 'East Legon', destination: 'Dzorwulo', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'delivered'},
        {receiver: 'Hagan Kwame', pickup: 'East Legon', destination: 'Dzorwulo', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'scheduled'},
        {receiver: 'Hagan Kwame', pickup: 'East Legon', destination: 'Dzorwulo', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'cancelled'},
    ];

    return (
        <SafeAreaView style={styles.dashboardPage}>
           <View style={styles.dashboardHeader}>
                <Text style={styles.headerTitle}>Hi {'Kwame'},</Text>
                <Text style={styles.headerSubtitle}>Track and monitoring your packages</Text>
           </View>
           <TrackingCard search={search}/>
        </SafeAreaView>
    );
}
