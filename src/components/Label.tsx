import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { color } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface LabelProps{
    title:String,
    isSelected:Boolean,
    onPress ?: ()=> void,

}

const Label = (props:LabelProps) => {
    console.log(props.isSelected)
  return (
    <TouchableOpacity 
    style={[styles.container,props.isSelected && styles.activeSelected]}
    onPress={props.onPress}
    
    >
        <Text style={[styles.textStyle ,props.isSelected && styles.text]}>{props.title}</Text>
        
    </TouchableOpacity>
  )
}

export default Label

const styles = StyleSheet.create({
    container:{
        width:windowWidth/3.4,
        height:windowHeight/16,
        borderWidth:1,
        borderColor:'#4448AE',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    },
    activeSelected:{
        backgroundColor:'#989BF0',
       
    },
    text:{
        color:'white'
    },
    textStyle:{
        color:'#4448AE',
        fontSize:14,
        fontWeight:'600',

    }
    

    
})