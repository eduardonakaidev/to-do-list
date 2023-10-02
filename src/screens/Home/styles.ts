import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1A1A1A',
         flex:1,
         padding:24
    },
    infoContainer:{
        height:20,
        width:'100%',
        flexDirection:'row',
        justifyContent: "space-between"
    },
    textCriadas: {
        color:'#4EA8DE',
        fontSize:14,
       

    },
    textConcluidas:{
        color:'#4EA8DE',
        fontSize:14,
       
    },
    buttonAddContainer:{
        backgroundColor:'#1E6F9F',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        height:56,
        width:56,
       
    },
    buttonAddContainerText:{
        color:'#fff',
        fontSize:24
    },
    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:36,
        marginBottom:42,

    },
    input:{
        flex:1,
        height:56,
        color:'#F2F2F2',
        fontSize:16,
        borderRadius:5,
        backgroundColor:'#262626',
        padding:16,
        marginRight:12,



    },
    ListEmplyTextFirst:{

    },
    ListEmplyTextSecond:{

    },
    EmplyContainer:{

    }
})