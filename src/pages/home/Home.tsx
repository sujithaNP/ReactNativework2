import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Home.style';
// import Image from 'react-native-svg';
import Ecllipse188 from "../../asset/ellipse-188.svg";
import Ecllipse187 from "../../asset/ellipse-187.svg"
import Ecllipse189 from "../../asset/ellipse-189.svg"
import Ecllipse190 from "../../asset/ellipse-190.svg"
import Ecllipse1881 from "../../asset/ellipse-1881.svg"


// import Ecllipse192 from "../asset/ellipse-19.svg"
import { deg } from 'react-native-linear-gradient-degree';



const Home = ({ navigation }) => {
  setTimeout(()=>{
    navigation.navigate('Welcome')
  },1000)

  return (
    <View >
      

      <LinearGradient colors={['#D0CBF1', '#989BF0']} {...deg(110)} style={styles.linearGradient}>
        <Ecllipse188 style={styles.ecllipse188}/>
        <Ecllipse187 style={styles.ecllipse187}   
        //  style={{transform: [{rotate: '270deg'}]}} 
         /> 
          <TouchableOpacity >
            <Image source={require('../../asset/car.png')} style={styles.imageCar}  /> 
          </TouchableOpacity>
        
         
         <Text style={styles.baseText}> Párkingrid</Text> 
           <Ecllipse189 style={styles.ecllipse189}/> 
           <Ecllipse190 style={styles.ecllipse190}/> 
           <Ecllipse1881 style={styles.ecllipse1881}/> 
           {/* <Ecllipse191/>  */}
        
      

        
      </LinearGradient>
    </View>
  )
}

export default Home

