import Home from '../home/Home';
import Login from '../login/Login';
import Modal from "react-native-modal";
import React, { useState } from 'react'
import Welcome from '../Welcome/Welcome';
import { styles } from './MapDirection.style';
import ImageCar from '../../asset/imagecar.svg'
import SearchImage from '../../asset/search.svg'
import NotificationImage from '../../asset/notification.svg'
import SaveImage from '../../asset/save.svg'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import ButtonWhite from '../../components/ButtonWhite';
import CustomButton from '../../components/Button';
import ForwardArrowImg from '../../asset/whiteArrow.svg'
// import Onboarding from 'react-native-onboarding-swiper';





const Dot = ({ selected }: any) => {
  let backgroundColor;
  backgroundColor = selected ? '#A0A2F0' : '#E0E0E0';
  const width = selected ? 35 : 8;
  return (
    <View style={{
      backgroundColor,
      width,
      height: 8,
      margin: 5,
      borderRadius: 100,
      marginTop: -1,
    }} />
  )
}

const MapDirection = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true)
  const handleCancel = () => {
    setIsVisible(false)
  }
  return (
    <KeyboardAvoidingScrollView style={{ padding: 10 }} >




      <Modal style={{ margin: 0,backgroundColor:'transparent' }}
        swipeDirection={['down']}
        onSwipeComplete={handleCancel}
        

        isVisible={isVisible}
        onBackdropPress={
          handleCancel
        }

      >
        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, marginTop: 150, marginBottom: 54, flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
          <Text style={styles.detailsText}>Details</Text>
          <View style={styles.bottomLineStyle} />
           {/* <Swiper showsButtons={false}  > */}
          
          {/* <View style={styles.viewStyle}>
            <ImageCar style={styles.imageCarStyle} />
          </View> */}
          <View >
            <ImageCar style={styles.imageCarStyle} />
           </View>

          {/* </Swiper>  */}
          {/* <Onboarding
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
                image: <ImageCar style={styles.imageCarStyle} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                backgroundColor: '#fff',
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              },
            ]}
          /> */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <View>
              <Text style={styles.parkingText}>Parking Lot of San Manolia</Text>
              <Text style={styles.parkingParaStyle}>9569, Trantow Courts, San Manolia</Text>
            </View>
            <SaveImage style={styles.imageStyle} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ButtonWhite buttonStyle={{ width: '40%', height: '44%', }} placetext={'Cancel'} onPress={handleCancel} />
            <CustomButton onPress={() => navigation.navigate('Details')} img={<ForwardArrowImg />} buttonConatinerStyle={{ width: '40%', height: '44%', }} placetext={'Details'}
              />
          </View>
        </View>



      </Modal>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <SearchImage style={styles.headerSearchImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <NotificationImage />
        </TouchableOpacity>



      </View>



    </KeyboardAvoidingScrollView>


  )
}

export default MapDirection

