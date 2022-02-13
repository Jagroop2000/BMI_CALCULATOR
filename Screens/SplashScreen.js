
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
       navigation.navigate("StartScreen");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
      source={require('../Images/BMISplash.png')}
     style={{width: '40%', resizeMode: 'contain', margin: 30}}
       />
    
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
  },
 
});