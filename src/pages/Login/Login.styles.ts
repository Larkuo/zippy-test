import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    loginPage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: '5%',
    },
    formHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
    },
    headerTitle: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 36,
        textAlign: 'center',
        color: colors.black,
    },
    headerSubTitle: {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        textAlign: 'center',
        color: colors.darkGray,
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

  });