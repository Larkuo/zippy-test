import { StyleSheet } from "react-native";
import { colors } from "../../Theme";

export const styles = StyleSheet.create({
    inputView: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: '5%',
    },
    inputLabel: {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'center',
        color: colors.black,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2.5%',
    },
    textInput: {
        width: '85%',
        height: '100%',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: colors.black,
    },
    inputIcon: {
        width: 24,
        height: 24,
    },
});