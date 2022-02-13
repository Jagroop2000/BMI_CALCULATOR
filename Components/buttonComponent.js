import React from "react";
import { View, StyleSheet, Dimensions , Text, TouchableOpacity} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ButtonComponent = ({navigation , next}) =>{
  return(
      <View>
      <TouchableOpacity
       style={styles.button}
       onPress={ () => {navigation.navigate(next)}}
      >
      
          <Text style={styles.textStyle}>Continue</Text>
     </TouchableOpacity>
      </View>
  )

}

export default ButtonComponent;

const styles = StyleSheet.create({

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