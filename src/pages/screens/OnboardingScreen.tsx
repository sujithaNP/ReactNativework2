import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useRef} from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-svg';
import ParkImage from "../../asset/parking-bro.svg"
import { color } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import CreditCard from '../../asset/Credit-card.svg'
import WatchImage from '../../asset/Wristwatch.svg'

// const Button=()=>{
//   // const navigation = useNavigation();
//   return(
//     <LinearGradient colors={['#CEC9F2','#9C9FF0']} style={styles.buttonLinearGradient} >
//       <TouchableOpacity  >
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   )
// }
// const ButtonSkip=()=>{
//   // const onboardingRef = useRef(null);
  
//   // ref={onboardingRef}
//   return(
//     <TouchableOpacity style={styles.secondButton} onPress={()=> onboardingRef.current.goNext()} >
//       <Text style={styles.skipText}>Skip</Text>
//     </TouchableOpacity>
//   )
// }

const Dot =({ selected }:any)=>{
  let backgroundColor;
  backgroundColor = selected ? '#A0A2F0': '#E0E0E0';
  const width = selected ? 35 : 8;
  return( 
    <View style={{
      backgroundColor,
      width,
      height:8,
      margin:5,
      borderRadius:100,
      marginTop:-1,
    }}/>
  )
}



const OnboardingScreen = () => {
  const navigation = useNavigation();
  const onboardingRef = useRef(null);
  
  return (
    <>
      <Onboarding
        ref={onboardingRef}
        DotComponent={Dot}
        // NextButtonComponent={Button }
        // SkipButtonComponent={ButtonSkip}
        showSkip={false}
        showDone={false} 
        showNext={false} 
        bottomBarColor={'#fff'}    
      
        

        pages={[
        {
          backgroundColor: '#fff',
          image: <ParkImage style={{marginTop:-160}}/> ,
          title:(<Text  style={styles.title}><Text style={styles.findText}>Find  Parking </Text><Text style={styles.placesText}> Places<Text style={styles.findParkingText1}>   Around You Easily </Text> </Text> </Text>),
          
          subtitle: <Text style={styles.paraTextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <CreditCard style={{marginTop:-170}}/> ,
          title:(<Text  style={styles.title}><Text style={styles.findText}>Book and Pay   </Text><Text style={styles.placesText}> Parking<Text style={styles.findParkingText1}>   Quickly & Safely </Text> </Text> </Text>),
          
          subtitle: <Text style={styles.paraTextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <WatchImage style={{marginTop:-180}}/>,
          title:(<Text  style={styles.title}><Text style={styles.findText}>Book and Pay   </Text><Text style={styles.placesText}> Parking<Text style={styles.findParkingText1}>   Quickly & Safely </Text> </Text> </Text>),
          
          subtitle: <Text style={styles.paraTextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>,
        },
        ]}
       

      />
       <View>
        

        <LinearGradient colors={['#CEC9F2','#9C9FF0']} style={styles.buttonLinearGradient}>
          <TouchableOpacity onPress={()=> onboardingRef.current.goNext()} >
            <Text style={styles.buttonText} >Next</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity style={styles.secondButton} onPress={()=>navigation.navigate('UserSignup')} >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      

    </>

  

  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:'700',
    fontFamily:'Urbanist-ExtraBold',
    color:'#212121',
    // paddingEnd:70,
    marginLeft:45,
    marginTop:-50,
    // width:330,
  },
  placesText:{
    color:'#4448AE',
  },
 
 
  findText:{
    fontFamily:'Urbanist-ExtraBold',
  },
  findParkingText1:{
    fontWeight:'700',
    fontFamily:'Urbanist-ExtraBold',
    color:'#212121',
    
    // marginLeft:40,
  },
  paraTextLorem:{
    width:360,
    marginTop:20,
    // height:66,
    marginLeft:20,
    fontSize:15,
    color:'#616161',
    fontWeight:'400',
    lineHeight:22,
    fontFamily:'Urbanist-Regular  ',
  },
  buttonLinearGradient:{
    width:370,
    height:55,
    borderRadius:10,
    marginBottom:12,                                                                           
    left:15, 
  },
  buttonText:{
    // left:268,
    top:12,
    fontSize:17,
    fontWeight:'700',
    color:'#FFFFFF',
    left:162,
   

  },
  secondButton:{
    width:370,
    height:55,
    borderRadius:10,
    backgroundColor:'#CCCAF366',
    left:20,
    marginBottom:30,
  },
  skipText:{
    fontSize:16,
    fontWeight:'700',
    color:'#4D5DFA',
    left:168,
    top:14,
  }
  
})