import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    orderItemCard: {
        width: '99%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: 15,
        borderRadius: 16,
        backgroundColor: colors.white,
        paddingVertical: 15,
        elevation: 5,
    },
    letfContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: colors.lightBlue,
        width: 46,
        height: 46,
        borderRadius: 28,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    courierIcon: {
        width: 25,
        height: 25,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    receiver: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
        textTransform: 'capitalize',
        color: colors.black,
    },
    locations: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16.8,
        letterSpacing: 0.2,
        textTransform: 'capitalize',
        color: colors.black,
        marginVertical: 3,
    },
    orderDate: {
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 14,
        letterSpacing: 0.2,
        color: colors.blue,
    },
    statusContainer: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    status: {
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '600',
        lineHeight: 15,
        letterSpacing: 0.2,
        textTransform: 'capitalize',
    }
});