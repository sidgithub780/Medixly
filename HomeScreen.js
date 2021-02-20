import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Button,  
} from 'react-native';
var test= 90;
var diagnoses= "     27";
var name = "John Doe";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1, top: 1}}
        source={require('../assets/homescreenbg.png')}>
       <TouchableOpacity style={styles.btn}>
        <Image source={require('../assets/menuicon.png')}  style={{height: 17, width: 38.5, marginLeft: 20, marginTop: 30}}/>
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeDiv}>
            <Text style={styles.welcome}>
              👋Hello,
            </Text>
            <Text style={styles.name}>
              {name}
            </Text>
            <Text style = {styles.stats}>
              Statistics 
            </Text>
            
            <View style= {{marginLeft: 10, backgroundColor: "#EDEDED", width: 280, height: 150, padding: 1, borderRadius: 20 }}>
            <Text style = {styles.num}>
              {test}
              <Text style = {styles.test}> Tests Done </Text> 
              <Text>  {diagnoses} </Text>
              <Text style = {styles.test}>diagnoses given </Text>
            </Text>
            <View style = {{flex:1, flexDirection: "row"}}>
            <Image style={{ marginLeft: 20, height: 94, width: 90 }} source={require('../assets/shot.png')} />
            <Image style={{ marginLeft: 50, height: 100, width: 90 }} source={require('../assets/image9.png')} />
            </View>
            </View>
            <Text style = {{textAlign: "left", fontSize: 30, color: '#474747', fontWeight: 'bold'}}> What do you need?</Text>
            <View style = {{flex:1, flexDirection: "row"}}>
            <TouchableOpacity style = {styles.border}>
            <Image style = {{alignSelf: 'center', height: 97.3, width: 84.6}} source = {require('../assets/Identification.png')}/>
            <Text style = {{marginLeft:15 , fontSize: 15}}> Identification </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.border}>
            <Image style = {{marginTop: 15, marginLeft: 20, alignSelf: 'center', height: 79.5, width:79.5}} source = {require('../assets/Consultation.png')}/>
            <Text style = {{marginTop: 2, marginLeft:15 , fontSize: 15}}> Consultation </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignSelf: "center",
    color: 'black',
    height: 200,
    width: 300
  },
  name: {
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 0,
    color: 'Black',
    fontWeight: 'bold',    
    textAlign: 'left',    
  },
 welcomeDiv: {
   marginTop: 15,
 },
  welcome: {
    marginTop: 0,
    marginLeft: 15,
    fontSize: 25,
    color: 'Black',
    fontWeight: 'bold',    
    textAlign: 'left',    
  },
  stats: {
    textAlign: "left", 
    fontSize: 30, color: '#474747',
     fontWeight: 'bold', 
     paddingLeft: 10
  },
  num: {
    marginTop: 10, 
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  test: {
    fontWeight: "normal",
  },
  border: {
    marginLeft: 10, 
    backgroundColor: "#EDEDED", 
    width: 120, 
    height: 130, 
    padding: 1, 
    borderRadius: 20
  }
});
export default HomeScreen;
