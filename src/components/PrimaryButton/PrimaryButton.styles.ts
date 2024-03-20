import { StyleSheet } from "react-native";
import { colors } from "../../Theme";

export const styles = StyleSheet.create({
    primaryButton: {
        width: '90%',
        height: 50,
        borderRadius: 8,
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12%',
    },
    buttonText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        textAlign: 'center',
        color: colors.white,
    },
});