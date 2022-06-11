import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export interface ButtonProps{
    img ?: JSX.Element,
    buttonText : string | number,
    onPress ?: ()=> void,
    buttonStyle ?: any ,
}

const RoundButton = (props:ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonstyle,props.buttonStyle]}>
        {props.img}
      <Text style={{color:'#4448AE'}}>{props.buttonText}</Text>
    </TouchableOpacity>
  )
}

export default RoundButton

const styles = StyleSheet.create({
    buttonstyle:{
        width:windowWidth/3.7,
        height:windowHeight/15,
        borderWidth:1,
        borderRadius:100,
        borderColor:'#4448AE',
        alignItems:'center',
        justifyContent:'center'
        

    }
})