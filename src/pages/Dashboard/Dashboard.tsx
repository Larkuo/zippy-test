import React, { useContext } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import { UserContext } from '../../context/UserContext';
import { styles } from './Dashboard.styles';
import { AppFooter, OrderListHeader, OrderListItem, OrderListItemProps, TrackingCard } from '../../components';

export function Dashboard() {
    const {userDetails} = useContext(UserContext);

    function search(value: string){}

    const ORDER_DATA: OrderListItemProps[] = [
        {receiver: 'Hagan Kwame', pickup: 'East Legon', dropoff: 'Dzorwulo', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'in progress'},
        {receiver: 'Monica Yeboah', pickup: 'Airport West', dropoff: 'AnC Mall', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'delivered'},
        {receiver: 'Alhaji Bawumia', pickup: 'Accra Mall', dropoff: 'Abelemkpe', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'scheduled'},
        {receiver: 'Nana Addo', pickup: 'Atomic Junction', dropoff: 'Kanda', orderDate: '15th, Jan, 2024 - 3:00 pm', status: 'cancelled'},
    ];

    return (
        <SafeAreaView style={styles.dashboardPage}>
           <View style={styles.dashboardHeader}>
                <Text style={styles.headerTitle}>Hi {'Kwame'},</Text>
                <Text style={styles.headerSubtitle}>Track and monitoring your packages</Text>
           </View>
           <TrackingCard search={search}/>
           <FlatList 
                data={[...ORDER_DATA, ...ORDER_DATA, ...ORDER_DATA]} 
                ListHeaderComponent={<OrderListHeader />}
                renderItem={({item, index}) => 
                    <OrderListItem
                        key={`${index} - ${item.receiver}`}
                        receiver={item.receiver}
                        pickup={item.pickup}
                        dropoff={item.dropoff}
                        orderDate={item.orderDate}
                        status={item.status}
                    />
                } 
                contentContainerStyle={styles.orderList}
                showsVerticalScrollIndicator={false}
            />
            <AppFooter />
        </SafeAreaView>
    );
}
