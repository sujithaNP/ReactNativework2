import {  Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Details.style'
import Arrow from '../../components/Arrow'
import ArrowImage from '../../asset/Group.svg'
import { Image } from 'react-native'
import SaveImage from '../../asset/save.svg'
import RoundButton from '../../components/RoundButton'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
import ButtonWhite from '../../components/ButtonWhite'
import CustomButton from '../../components/Button'


const Details = ({navigation}) => {
  return (
    <KeyboardAvoidingScrollView style={{padding:15,backgroundColor:'#ffff'}}>
      <View style={{ marginTop: 15,marginBottom:10}}>
        <Arrow headerText={'Parking Details'} headerImage={<ArrowImage />} onPress={() => navigation.goBack()} />
      </View>
      <View >
        {/* <ImageCar style={styles.imageCarStyle} /> */}
        <Image source={require('../../asset/imagecar2.png')} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
        <View>
          <Text style={styles.parkingText}>Parking Lot of San Manolia</Text>
          <Text style={styles.parkingParaStyle}>9569, Trantow Courts, San Manolia</Text>
        </View>
        <SaveImage style={styles.imageStyle} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        
        <RoundButton  buttonText={'2km'}/>
        <RoundButton  buttonText={'8 AM - 10 PM'}/>
        <RoundButton  buttonText={'Valet'}/>
      </View>
      <View>
        <Text style={styles.descriptionText}>Description</Text>
        <Text style={styles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Read more...</Text>
      </View>
      <View style={{marginTop:10,marginBottom:15}}>
        <ButtonWhite buttonStyle={{ width: '100%',  }} buttonText={'per hour'} placetext={'$2.00'} />
      </View>
      <View style={{flexDirection:'row',marginBottom:50}}>
      <ButtonWhite buttonTextStyle={styles.buttonText} placetext={'Cancel'}  />
      <CustomButton onPress={() => navigation.navigate('SelectVehicle')} buttonConatinerStyle={{width:'43%'}} placetext={'Book Parking'}/>
      
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default Details

