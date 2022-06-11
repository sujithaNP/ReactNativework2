import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Image } from 'react-native-svg'

export interface headerProps {
  headerImage: React.ReactElement,
  headerText: string | number,
  headerTextStyle?: StyleProp<TextStyle>,
  onPress ?: () => void,
}
const Arrow = (props: headerProps) => {
  
  return (

    <View style={styles.box}>
      <TouchableOpacity onPress={props.onPress}>
        {props.headerImage}
      </TouchableOpacity>
      <View>
        <Text style={[styles.baseText, props.headerTextStyle]}>{props.headerText}</Text>

      </View>

    </View>


  )
}

export default Arrow

const styles = StyleSheet.create({
  baseText: {
    color: 'black',
    fontFamily: 'Urbanist-Bold',
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginLeft: 10,

  },
  box: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  }
})