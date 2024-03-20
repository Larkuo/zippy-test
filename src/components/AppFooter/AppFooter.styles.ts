import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appFooter: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        position: 'absolute',
        zIndex: 5,
        bottom: 0,
        left: 0,
        paddingHorizontal: '5%',
    },
    iconContainer: {},
    footerIcon: {
        width: 24,
        height: 24,
    },
});