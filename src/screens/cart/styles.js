import { StyleSheet } from "react-native";
import { THEME } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
    },
    listContainer: {
        flex: 1,
        backgroundColor: THEME.colors.white,
    },
    footer: {
        backgroundColor: THEME.colors.white,
        borderTopColor: THEME.colors.primary,
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    buttonConfirm: {
        backgroundColor: THEME.colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonConfirmText: {
        color: THEME.colors.white,
        fontSize: 14,
        fontFamily: 'Bitter-Medium',
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalText: {
        color: THEME.colors.white,
        fontSize: 14,
        fontFamily: 'Bitter-Medium',
    },
    totalPrice: {
        color: THEME.colors.white,
        fontSize: 16,
        fontFamily: 'Bitter-Bold',
    },
});