import { StyleSheet } from "react-native";
import { THEME } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME.colors.background,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        fontFamily: 'Bitter-Bold',
        padding:10,
        color: THEME.colors.text,
    }
});