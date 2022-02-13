import React from "react";
import {View , Text} from "react-native";
import style from "../Styles/Styles";
export default class ResultScreen  extends React.Component {
    render() {
        return(
            <View style={{flex :1}}>
                <View style={style.largestWhiteCard}>

                    <Text style={style.textStyle}>Your BMI Is :</Text>
                    <Text style={{color :"#6692c3" , fontSize : 50 , margin: 20, alignSelf :"center"}}>{this.props.route.params.result}</Text>
                    <Text style={style.textStyle}>Your Health Status Is : :</Text>
                    <Text style={{color :"#6692c3" , fontSize : 50 , margin: 20, alignSelf :"center"}}>{this.props.route.params.message}</Text>
                </View>
              
            </View>
        );
    }
}