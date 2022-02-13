import React from "react";
import { View , Text, Image, TouchableOpacity, TextInput, StyleSheet , Dimensions} from "react-native";
import style from "../Styles/Styles";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Toast from 'react-native-simple-toast';

export default class HeightNWeight extends React.Component {

   state={
       height : 0,
       weight :0,
   };

   calculateResult =() =>{
    if(this.state.height === 0){
      Toast.show('Please Enter Your Height');
      return;
    }
    else if(this.state.height<121 || this.state.height>212){
      Toast.show('Please enter valid height between 121 and 212 cm');
      return;
    }

    else if(this.state.weight === 0){
      Toast.show('Please Enter Valid Weight');
      return;
    }

else {
     
     let bmi = ((this.state.weight)/ ((this.state.height/100)*(this.state.height/100))).toFixed(1);
     let message  = bmi > 30? ("Obesity") :(bmi>25 ? "Over Weight" :  bmi > 18.5 ? "Healthy" : "Under Weight");
    
      this.props.navigation.navigate("ResultScreen" , {result :bmi , message : message});
    }
   }
    render() {
        return(
            <View style={{flex: 1}}>
            <Text style={style.textStyle}>Height And Weight</Text>
            <View style={style.fullWhiteCard}>
              <Text style={style.smallText}>Fill your Height Details : </Text>
              <View style={{flexDirection :"row"}}>
                  <Image source={require('../Images/height.png')} style={style.heightImageStyle}/>
              <View style={style.inputBox}>
                <TextInput 
                placeholder="HEIGHT(CM)"
                placeholderTextColor="white"
                style={style.inputTextStyle}
                keyboardType="numeric"
                onChangeText ={(heightValue) => { this.setState({ height : heightValue})}}
                />
              </View>
              </View>
            </View>
            <View style={style.fullWhiteCard}>
            <Text style={style.smallText}>Fill your Weight Details : </Text>
              <View style={{flexDirection :"row"}}>
                  <Image source={require('../Images/weight.png')} style={style.heightImageStyle}/>
              <View style={style.inputBox}>
                <TextInput 
                placeholder="WEIGHT (KG)"
                placeholderTextColor="white"
                style={style.inputTextStyle}
                keyboardType="numeric"
                onChangeText ={(weightValue) => { this.setState({ weight : weightValue})}}
                />
              </View>
              </View>
            </View>
            <TouchableOpacity
           style={hnwStyle.button}
          onPress={ () => {this.calculateResult()}}
            >
      
          <Text style={hnwStyle.textStyle}>Claculate</Text>
          </TouchableOpacity>
            </View>
        );
    }
}

const hnwStyle = StyleSheet.create({

    button:{
        height : windowHeight*0.06,
        width : "90%",
        marginTop: windowWidth*0.08,
        marginLeft : windowWidth*0.05,
        backgroundColor :"#6692c3",
        borderRadius : 20,
        elevation : 4,
        justifyContent :"center",
        alignItems:"center"
    },
    textStyle:{
        fontSize : 20,
        color :"white",
        fontWeight :"500"
    }
})