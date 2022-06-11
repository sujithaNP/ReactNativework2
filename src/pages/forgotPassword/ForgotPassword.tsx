import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './ForgotPassword.style'
import CustomArrow from '../../components/Arrow'
import ArrowImage from '../../asset/Group.svg'
import Image from '../../asset/Forgotpassword.svg'
import ImageForgotPasword from '../../components/ImageForgotPasword'
import { SafeAreaView } from 'react-native-safe-area-context'
import LayoutImage from '../../asset/Layout .svg'
import LayoutImage2 from '../../asset/Layout1.svg'
import CustomBox from '../../components/Box'
import CustomButton from '../../components/Button'
import Arrow from '../../components/Arrow'

const ForgotPassword = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',padding:10}}>
      <Arrow headerImage={<ArrowImage style={styles.arrow}/>}/>
      <Arrow headerText={'Forgot Password'}/>

      <ImageForgotPasword img={<Image style={{marginTop:-29}}/>}/>
      <Text style={styles.selectText}  >Select which contact details should we use to reset your password</Text>
      <CustomBox num={'+1 111 ******99'} smsText={'via SMS:'}  img={<LayoutImage style={{marginTop:13,marginLeft:12}}/> }/>
      <CustomBox num={'and***ey@yourdomain.com'} smsText={'via Email:'}  img={<LayoutImage2 style={{marginTop:13,marginLeft:12}}/> }/>
      

      <TouchableOpacity onPress={() => navigation.navigate('Forgot2')}>
        <CustomButton placetext={'Continue'} />
      </TouchableOpacity>
      
      
    </View>
  )
}

export default ForgotPassword

