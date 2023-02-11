import { StyleSheet } from "react-native";
import { THEME } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:10,
        height:110,
        backgroundColor: THEME.colors.primary,
    },
    contentContainer:{
        flex:1,
        justifyContent:'space-around',
    },
    title:{
        fontFamily:'Bitter-Medium',
        fontSize:16,
        color: THEME.colors.white,
    },
    detailsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    price:{
        fontFamily:'Bitter-Bold',
        fontSize:16,
        color: THEME.colors.white,
    },
    quantity:{},
    weight:{
        fontFamily:'Bitter-Regular',
        fontSize:14,
        color: THEME.colors.white,
    },
});