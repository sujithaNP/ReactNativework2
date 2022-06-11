import { StyleSheet, Text, View ,TouchableOpacity,SafeAreaView,TextInput,} from 'react-native'
import React from 'react'
import {styles} from './LoginAccount.style'
import ArrowImage from '../../asset/Group.svg'
import Gmail from '../../asset/Exclude.svg'
import Lock from '../../asset/lock.svg'
import Union from '../../asset/Union.svg'
import Rect from '../../asset/Rectangle.svg'
import LinearGradient from 'react-native-linear-gradient';
import FbIcon from '../../asset/Frame.svg'
import Google from '../../asset/google.svg'
import Apple from '../../asset/apple.svg'








const LoginAccount = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowImage style={styles.arrow} />
        </TouchableOpacity>
      
      <Text style={styles.baseText}>Login to your<Text style={{ color: '#9C9FF0' }}> Account</Text></Text>
      <SafeAreaView  style={{marginBottom:10}}>
            <View style={styles.icons}>
                <Gmail style={styles.iconStyle} />
                <View >
                    <TextInput style={styles.continueText} >Olivia.Lucas@yourdomain.com</TextInput>

                </View>

            </View>
        </SafeAreaView> 
        <SafeAreaView style={styles.box}>
        <View style={styles.icons}>
          <Lock style={styles.iconStyle} />
          <TextInput style={styles.continueText} ></TextInput>
          <Union style={styles.union} />

        </View>


      </SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Rect />
        <Text style={{color:'#212121'}}>   Remember me</Text>
      </View>
      <LinearGradient colors={['#CEC9F2','#9C9FF0']} style={styles.buttonLinearGradient}>
          <TouchableOpacity>
            <Text style={styles.buttonText} >Sign in</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.forgotPassword}>Forgot the password?</Text>
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
        <Text style={styles.text}>Don’t have an account?<Text style={{ color: '#4448AE' }}
          onPress={() => navigation.navigate('LoginThirdPage')}>Sign up</Text></Text>
      </View>
    </View>
  )
}

export default LoginAccount

