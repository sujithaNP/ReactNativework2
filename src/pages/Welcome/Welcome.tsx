import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Welcome.style'
import WelcomeImage from '../../asset/Welcome.svg'
import LinearGradient from 'react-native-linear-gradient';
// import Urbanist from '../asset/static/Urbanist-Bold.ttf';

// import Welcomes from '../asset/welcome-to.svg'

const Welcome = ({navigation}: Props) => {
  return (
    <View style={styles.container} >
      <WelcomeImage style={styles.welcomeImage}/>
      
      {/* <Welcomes style={styles.welcome}/> */}
      {/* <Welcomes/> */}
      <Text style={styles.welcomeText}>Welcome to 👋</Text>
      <View style={styles.container2}>
        <Text style={styles.baseText}>Parkingrid</Text>
        <Text style={styles.paraText}>The best parking app of the century for all people in the world.</Text>
        <LinearGradient colors={['#CEC9F2','#9C9FF0']} style={styles.buttonLinearGradient}>
          <TouchableOpacity onPress={()=>navigation.navigate('NavigationContainer')}>
            <Text style={styles.buttonText} >Next</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={styles.secondButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        


      </View>
      
    </View>
  )
}

export default Welcome

