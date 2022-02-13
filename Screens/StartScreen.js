import React from "react";
import {View , Text , Image} from "react-native";
import { WelcomeMessage, WelcomeMessageNext } from "../Styles/Const";
import style from "../Styles/Styles";
import ButtonComponent from "../Components/buttonComponent";

export default class StartScreen extends React.Component {

    render() {
        return(
            <View style={style.globalContainer}>
                <View>
                    <Image  source={require('../Images/welcome.png')}  style={style.welcomeImage}/>
                    <Text style={style.textStyle}>Welcome !!</Text>
                    <View style={style.topMargin}/>
                    <Text style={style.welcomeTextStyle}>{WelcomeMessage}</Text>
                    <Text style={style.welcomeTextStyle}>{WelcomeMessageNext}</Text>
                    <ButtonComponent  navigation={this.props.navigation} next="Gender" />
                </View>
            </View>
        );
    }
}