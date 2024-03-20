import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    listHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 10,
    },
    listHeaderTitle: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.2,
        color: colors.black,
    },
    listHeaderSubtitle: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 18.2,
        color: colors.cyan,
    },
});