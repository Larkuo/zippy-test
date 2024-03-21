import { StyleSheet } from "react-native";
import { colors } from "../../Theme";

export const styles = StyleSheet.create({
    trackingCard: {
        width: '95%',
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: '3.5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
    },
    watermark: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    trackingCardTitle: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 28,
        textAlign: 'left',
        color: colors.white,
        marginBottom: 10,
    },
    trackingCardSubtitle: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16.8,
        textAlign: 'left',
        color: colors.white_70,
        marginBottom: 10,
    },
    searchRow: {
        width: '100%',
        padding: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2.5%',
    },
    searchInputContanier: {
        width: '63%',
        height: 40,
        borderRadius: 8,
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2.5%',
    },
    searchIcon: {
        width: 17,
        height: 17,
    },
    searchInput: {
        width: '85%',
        height: '100%',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 15.6,
        color: colors.black,
    },
    searchButton: {
        width: '35%',
        height: 40,
        backgroundColor: colors.darkPrimary,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16.8,
        color: colors.white,
    },
});