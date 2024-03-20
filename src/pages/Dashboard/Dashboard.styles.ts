import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    dashboardPage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
        position: 'relative',
    },
    dashboardHeader: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: '10%',
        paddingBottom: '5%',
    },
    headerTitle: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22.4,
        color: colors.black,
    },
    headerSubtitle: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20.8,
        color: colors.darkGray,
    },
    orderList: {
        width: '90%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 100,
    },
});