import React from "react";
import { View, StyleSheet, Dimensions , Text, TouchableOpacity} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderComponent = ({navigation, name , colour }) =>{
  return(
      <View>
      <View
       style={{
        height : windowHeight*0.06,
        width : "92%",
        marginTop: windowWidth*0.02,
        marginLeft : windowWidth*0.02,
        backgroundColor :{colour},
        borderRadius : 20,
        elevation : 1,
        justifyContent :"center",
        alignItems:"center"
       }}
       onPress={ () => {navigation.navigate("Gender")}}
      >
      
          <Text style={styles.textStyle}>{name}</Text>
     </View>
      </View>
  )

}

export default HeaderComponent;

const styles = StyleSheet.create({

    textStyle:{
        fontSize : 20,
        color :"white",
        fontWeight :"500"
    }
})