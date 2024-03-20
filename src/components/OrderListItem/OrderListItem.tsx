import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './OrderListItem.styles';
import { colors } from '../../theme';

const CourierIcon = require('../../assets/icons/courier_icon.png');

export interface OrderListItemProps{
    receiver: string;
    pickup: string;
    dropoff: string;
    orderDate: Date | string;
    status: 'in progress' | 'delivered' | 'scheduled' | 'cancelled';
}

export function OrderListItem({
    receiver,
    pickup,
    dropoff,
    orderDate,
    status,
}:OrderListItemProps) {
    const statusColor = status === 'in progress'? colors.yellow
        : status === 'delivered' ? colors.cyan
        : status === 'scheduled' ? colors.blue
        : colors.red;
    ;
    const statusBackground = status === 'in progress'? colors.lightYellow
        : status === 'delivered' ? colors.lightCyan
        : status === 'scheduled' ? colors.lightBlue
        : colors.lightRed;

    return (
        <View style={styles.orderItemCard}>
            <View style={styles.letfContainer}>
                <View style={styles.iconContainer}>
                    <Image source={CourierIcon} style={styles.courierIcon}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.receiver}>To: {receiver}</Text>
                    <Text style={styles.locations}>{pickup} - {dropoff}</Text>
                    <Text style={styles.orderDate}>
                        {typeof(orderDate) === 'string'? orderDate : orderDate.toUTCString()}
                    </Text>
                </View>
            </View>
            <View style={[styles.statusContainer, {backgroundColor: statusBackground}]}
            ><Text style={[styles.status, {color: statusColor}]}>{status}</Text></View>
        </View>
    );
}
