import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Profile.style'
import ArrowImage from '../../asset/Group.svg'
import Profle from '../../asset/Ellipseprofile.svg'
import Edit from '../../asset/edit.svg'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../asset/Gp.svg'
import Email from '../../asset/email.svg'
import Flag from '../../asset/flag.svg'
import  DownArrow  from '../../asset/Vector.svg'
import Down from '../../asset/Down.svg'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';


const Profile = ({ navigation }) => {
    const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
    return (
        <KeyboardAvoidingScrollView>
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowImage style={styles.arrow} />
           </TouchableOpacity>
                <Text style={styles.baseText}>Fill Your Profile</Text>
            </View>
            <Profle style={{ marginLeft: '30%', marginTop: -10,marginBottom:10, }} />
            <Edit style={{ marginLeft: '55%', marginTop: -29 }} />
            <View  style={{marginBottom:10}}>
                <View style={styles.icons}>
                     <TextInput style={styles.nameText} placeholder='Full Name' ></TextInput>


                </View>
            </View>
            <View style={{marginBottom:10}}>
                <View style={styles.icons}>
                    <TextInput style={styles.nameText} placeholder='Nickname'></TextInput>


                </View>
            </View>
            <View style={{marginBottom:10}}>
                <View style={styles.icons}>
                    <Icon style={styles.iconStyle} />
                    <View >
                        <TextInput style={styles.continueText} placeholder='Date of Birth'></TextInput>

                    </View>

                </View>
            </View>
            <View  style={{marginBottom:10}}>
                <View style={styles.icons}>
                    <Email style={styles.iconStyle} />
                    <View >
                        <TextInput style={styles.continueText} placeholder='Email' ></TextInput>

                    </View>

                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.icons}>
                <Flag style={{marginTop:10}} />
                <TextInput style={styles.continue}  placeholder='Phone Number'></TextInput>
                <DownArrow style={styles.union} />

                </View>

            </View>

            <View  style={{marginBottom:1,marginTop:-10,}}>
                <View style={styles.icons}>
                    
                    <View >
                        <TextInput style={styles.genderText}  placeholder='Gender'></TextInput>

                    </View>
                    <Down style={styles.down} />

                </View>
            </View>
                

               
                <LinearGradient colors={['#CEC9F2', '#9C9FF0']} style={styles.buttonLinearGradient}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText} >Continue</Text>
                    </TouchableOpacity>
                </LinearGradient>




            {/* </SafeAreaView> */}

        </KeyboardAvoidingScrollView>
    )
}

export default Profile

