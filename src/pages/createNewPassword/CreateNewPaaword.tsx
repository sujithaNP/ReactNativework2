import React, { useState } from 'react'
import Modal from "react-native-modal";
import Lock from '../../asset/lock3.svg'
import Icon from '../../asset/Union3.svg'
import Arrow from '../../components/Arrow'
import ArrowImage from '../../asset/Group.svg'
import { styles } from './CreateNewPaaword.style'
import CustomButton from '../../components/Button'
import InputField from '../../components/InputField'
import CheckBox from '@react-native-community/checkbox';
import MobileImage from '../../asset/Mobileloginbro1.svg'
import ImageForgotPasword from '../../components/ImageForgotPasword'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { KeyboardAvoidingContainer, KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'



const CreateNewPaaword = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [isSecureEntry, setIsSecureEntry] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const handleIsModalVisible = () => {
    setIsVisible(true)
  }
  const handleIsModalInvisible = () => {
    setIsVisible(false)


  }

  return (
    <KeyboardAvoidingScrollView style={{ backgroundColor: '#fff', padding: 10 }}>
      <View>
        <Modal
          // onBackdropPress={()=>{
          //   setIsVisible(false);
          //   navigation.navigate('')
          // }}

          isVisible={isVisible}
          >
          <View style={{ backgroundColor: '#ffffff', margin: 10, padding: 10, borderRadius: 10, marginBottom: 90, marginTop: 90, flex: 1 }}>
            <ImageForgotPasword img={<MobileImage style={{ alignSelf: 'center' }} />} />
            <View>
              <Text style={styles.congratzText}>Congratulations!</Text>
              <Text style={styles.text}>Your account is ready to use</Text>
            </View>

            <CustomButton buttonConatinerStyle={{ width: '83%', height: '15%', alignSelf: 'center' }} placetext={'Go to Homepage'} onPress={handleIsModalInvisible} />
          </View>
        </Modal>
        <Arrow headerText={'Create New Password'} headerImage={<ArrowImage style={styles.arrow} />} />
      </View>

      <View>
        <ImageForgotPasword img={<MobileImage style={{ alignSelf: 'center' }} />} />
      </View>
      <View>
        <Text style={styles.createPasswordText}>Create Your New Password</Text>
      </View>

      <View style={styles.icons}>
        <InputField isSecureEntry={isSecureEntry} img={<Lock style={styles.lock} />} image={<TouchableOpacity onPress={() => { setIsSecureEntry((prev) => !prev) }}><Icon style={styles.union} /></TouchableOpacity>} />
      </View>

      <View style={styles.icons}>
        <InputField isSecureEntry={isSecureEntry} img={<Lock style={styles.lock} />} image={<TouchableOpacity onPress={() => { setIsSecureEntry((prev) => !prev) }}><Icon style={styles.union} /></TouchableOpacity>} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.rememberText} >Remember me</Text>
      </View>
      <CustomButton placetext={'Continue'} onPress={handleIsModalVisible} />

    </KeyboardAvoidingScrollView>
  )
}

export default CreateNewPaaword

