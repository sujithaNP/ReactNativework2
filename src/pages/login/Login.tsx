import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from './Login.style'
import ArrowImage from '../../asset/Group.svg'
import Email from '../../asset/email2.svg'
import Lock from '../../asset/lock3.svg'
import Icon from '../../asset/Union3.svg'
import Rect from '../../asset/Rectangle.svg'
import LinearGradient from 'react-native-linear-gradient';
import FbIcon from '../../asset/Frame.svg'
import Google from '../../asset/google.svg'
import Apple from '../../asset/apple.svg'






const Login = ({navigation}) => {
  // const {width,height}= useWindowDimensions()
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowImage style={styles.arrow} />
        </TouchableOpacity>
      
      <Text style={styles.baseText}>Login to your</Text>
        <SafeAreaView  style={{marginBottom:10}}>
          <View style={styles.icons}>
                <Email style={styles.iconStyle} />
                <View >
                    <TextInput style={styles.continueText} placeholder='Email' ></TextInput>

                </View>

          </View>
        </SafeAreaView>
        <View style={styles.box}>
        <View style={styles.icons}>
          <Lock style={styles.iconStyle} />
          <TextInput style={styles.continueText} placeholder='Password' ></TextInput>
          <Icon style={styles.union} />

        </View>

      </View> 
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Rect />
        <Text style={{color:'#212121'}}>   Remember me</Text>
      </View>
      <LinearGradient colors={['#CEC9F2', '#9C9FF0']} style={styles.buttonLinearGradient}>
        <TouchableOpacity onPress={() => navigation.navigate('ParkingHome')} >
          <Text style={styles.buttonText} >Sign up</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>Forgot the password?</Text>
      <Text style={styles.text}>or continue with</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={styles.icon}>
          <FbIcon style={styles.fbicon} />
        </View>
        <View style={styles.icon}>
          <Google style={styles.fbicon} />
        </View>
        <View style={styles.icon}>
          <Apple style={styles.fbicon} />

        </View>

      </View>
      <View>
        <Text style={styles.text}>Don’t have an account?</Text>
      </View>
    </View>
  )
}

export default Login

