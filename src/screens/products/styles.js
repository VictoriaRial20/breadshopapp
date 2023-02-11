import { StyleSheet } from "react-native";
import { THEME } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME.colors.background,
    },
    title:{
        fontSize:18,
        fontFamily: 'Bitter-Bold',
        padding:10,
        color: THEME.colors.text,
    },
    contentList:{
        flex:1,
    },
});