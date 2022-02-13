import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style= StyleSheet.create({
   
    globalContainer :{
        flex: 1,
        backgroundColor : "white"
    },
    welcomeImage:{
        height : windowHeight*0.15,
        width : windowWidth*0.26,
        alignSelf :"center",
        marginTop : windowHeight*0.05
    },
    textStyle:{
        marginTop:windowHeight*0.05,
        fontSize : 30,
        alignSelf:"center",
        color :"black",
        fontWeight :"500"
    },

    topMargin :{
        marginTop : windowHeight*0.2,
    },
    welcomeTextStyle:{
        marginLeft:windowHeight*0.02,
        marginLeft:windowHeight*0.02,
        fontSize : 20,
        color :"black",
        fontWeight :"500"
    },
    whiteCard:{
        marginTop : windowHeight*0.04,
        height : windowHeight*0.22,
        width:"45%",
        backgroundColor :"white",
        borderRadius : 10,
        elevation :2,
        marginLeft : windowHeight*0.02,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    profileImage :{
        height : windowHeight*0.15,
        width : windowWidth*0.3,
       
    },
    fullWhiteCard:{
        marginTop : windowHeight*0.04,
        height : windowHeight*0.25,
        width:"90%",
        backgroundColor :"white",
        borderRadius : 10,
        elevation :2,
        alignSelf:"center"
    },
    smallText:{
        fontSize : 20,
        color : "#6692c3",
        marginTop : windowHeight*0.04,
        marginLeft : windowHeight*0.04,
        fontWeight : "500",
    },

    inputBox:{
        height : windowHeight*0.08,
        width : "50%",
        marginTop: windowWidth*0.08,
        marginLeft : windowWidth*0.05,
        backgroundColor :"#d3d9e1",
        borderRadius : 20,
        justifyContent :"center",
        alignItems:"center",
        alignSelf :"center",
    },
    heightImageStyle:{
        marginTop: windowWidth*0.08,
        marginLeft : windowWidth*0.05,
        marginRight : windowWidth*0.08,
        height : windowHeight*0.08,
        width:windowWidth*0.16,
        tintColor :"#6692c3"
    },
    inputTextStyle:{
        fontSize : 20,
        fontWeight :"500",
        color : "white",
        alignSelf :"center"
    },
    largestWhiteCard:{
        marginTop : windowHeight*0.04,
        height : windowHeight*0.7,
        width:"90%",
        backgroundColor :"white",
        borderRadius : 10,
        elevation :2,
        alignSelf:"center"
    },
    
});

export default style;