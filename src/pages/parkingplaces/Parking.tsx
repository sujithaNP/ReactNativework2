import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Parking.style'
import ParkingImage from "../asset/parking-bro.svg"


const Parking = () => {
  return (
    <View style={styles.container}>
      <ParkingImage style={styles.ParkingImage}/>
      <View style={styles.container2}>
          <Text style={styles.findParkingText}>  Find  Parking <Text style={styles.placesText}> Places</Text>  </Text>
          <Text style={styles.findParkingText1}> Around You Easily</Text>
          <Text style={styles.paraTextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>
     
    </View>
  )
}

export default Parking

