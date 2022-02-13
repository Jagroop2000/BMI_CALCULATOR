import React from "react";
import { View , Text, Image, TouchableOpacity } from "react-native";
import style from "../Styles/Styles";

export default class Gender extends React.Component {

   onPressNext = () =>{
       this.props.navigation.navigate("HeightNWeight")
   }
    render() {
        return(
            <View style={{flex: 1}}>
            <Text style={style.textStyle}>Select Your Gender</Text>
            <TouchableOpacity style={style.whiteCard} onPress={() => {this.onPressNext()}}>
            <Image  source={require('../Images/man.png')} style={style.profileImage}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.whiteCard} onPress={() => {this.onPressNext()}}>
            <Image  source={require('../Images/woman.png')} style={style.profileImage}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.whiteCard} onPress={() => {this.onPressNext()}}>
            <Image  source={require('../Images/Other.png')} style={style.profileImage}/>
            </TouchableOpacity>
            </View>
        );
    }
}