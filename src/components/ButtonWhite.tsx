import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface buttonProps {
    placetext: string | number,
    onPress ?: any ,
    buttonStyle ?: any,
    buttonText ?: string | number,
    buttonTextStyle ?: any,
    
}   

const ButtonWhite = (props:buttonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button,props.buttonStyle]}>
            <Text style={[styles.buttonText,props.buttonTextStyle]} >{props.placetext}</Text>
            <Text>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonWhite

const styles = StyleSheet.create({
    button:{
        width:'43%',
        height:windowHeight/12,
        borderRadius:10,
        marginBottom:12, 
        marginTop:10,                                                                          
        // left:15,
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#F8F7FD'
    },
    buttonText:{
        fontSize:17,
        fontWeight:'700',
        color:'#4448AE',
    },
})