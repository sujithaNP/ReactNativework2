import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './SignupWith.style'
import ArrowImage from '../../asset/Group.svg'
import Gmail from '../../asset/Exclude.svg'
import Lock from '../../asset/lock2.svg'
import Union from '../../asset/Union2.svg'
import Rect from '../../asset/Rectangle.svg'
import LinearGradient from 'react-native-linear-gradient';
import FbIcon from '../../asset/Frame.svg'
import Google from '../../asset/google.svg'
import Apple from '../../asset/apple.svg'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import CheckBox from '@react-native-community/checkbox';





const SignupWith = ({ navigation }) => {
  
  const [isSecureEntry,setIsSecureEntry] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <KeyboardAvoidingScrollView style={{backgroundColor:'#fff',padding:10}}>
      
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <ArrowImage style={styles.arrow} />
      </TouchableOpacity>
      <Text style={styles.baseText}>Create your
        <Text style={{ color: '#9C9FF0' }}>Account</Text></Text>
      <View style={styles.box}>
        <View style={styles.icons}>
          <Gmail style={styles.gmail} />
          <TextInput style={styles.continueText} >Olivia.Lucas@yourdomain.com</TextInput>

        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.icons}>
          <Lock style={styles.gmail} />
          <TextInput style={styles.continueText} 
          secureTextEntry={isSecureEntry}
          ></TextInput>
          <TouchableOpacity onPress={()=>{setIsSecureEntry((prev)=>!prev)}}>
            <Union style={styles.union} />
          </TouchableOpacity>
          

        </View>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        {/* <Rect /> */}
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.rememberText}> Remember me</Text>
      </View>
      <LinearGradient colors={['#CEC9F2', '#9C9FF0']} style={styles.buttonLinearGradient}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText} >Sign up</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.continueWithText}>or continue with</Text>
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
          onPress={() => navigation.navigate('Profile')}>Sign up</Text></Text>
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default SignupWith

