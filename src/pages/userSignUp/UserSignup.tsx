import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './UserSIgnup.style'
import ArrowImage from '../../asset/Group.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import FbIcon from '../../asset/Frame.svg'
import Google from '../../asset/google.svg'
import Apple from '../../asset/apple.svg'

const UserSignup = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#fff',padding:10}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowImage style={styles.arrow} />
        </TouchableOpacity>
      <Text style={styles.baseText}>Let’s you in</Text>
      <TouchableOpacity style={styles.box}>
          <View style={styles.icons}>
            <FbIcon style={styles.fb}/>
            <Text style={styles.continueText1} >Continue with Facebook</Text>

          </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
          <View style={styles.icons}>
            <Google style={styles.fb}/>
            <Text style={styles.continueText1} >Continue with Google</Text>

          </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
          <View style={styles.icons}>
            <Apple style={styles.fb}/>
            <Text style={styles.continueText1} >Continue with Apple</Text>

          </View>
      </TouchableOpacity>

      <LinearGradient colors={['#CEC9F2','#9C9FF0']} style={styles.buttonLinearGradient}>
          <TouchableOpacity>
            <Text style={styles.buttonText} onPress={()=>navigation.navigate('Login')} >Sign in with password</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View>
          <Text style={styles.text}>Don’t have an account?<Text style={{color:'#4448AE'}}
           onPress={() => navigation.navigate('SignupWith')}>Sign up</Text></Text>
        </View>
        
        
    </View>
  )
}

export default UserSignup

