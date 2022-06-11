import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Forgot2.style'
import CustomArrow from '../../components/Arrow'
import ArrowImage from '../../asset/Group.svg'
import Image from '../../asset/Forgotpassword.svg'
import ImageForgotPasword from '../../components/ImageForgotPasword'
import SquareBox from '../../components/SquareBox'
import CustomButton from '../../components/Button'
import Arrow from '../../components/Arrow'

const Forgot2 = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',padding:10}}>
      <Arrow headerImage={<ArrowImage style={styles.arrow}/>} />
      <Arrow headerText={'Forgot Password' }/>
      <ImageForgotPasword img={<Image style={{marginTop:20}}/>}/>
      <Text style={styles.sendCode}>Code has been send to +1 111 ******99</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        
        <SquareBox code={'2'} />
        <SquareBox code={'7'}/>
        <SquareBox/>
        <SquareBox/>
      </View>
      <Text style={styles.resendText} >Resend code in 55 s</Text>
      
      <TouchableOpacity onPress={()=>navigation.navigate('CreateNewPaaword')} >
        <CustomButton placetext={'Continue'} />
      </TouchableOpacity>
      
     
      

    </View>
  )
}

export default Forgot2

