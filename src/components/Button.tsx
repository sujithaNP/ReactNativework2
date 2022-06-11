import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface buttonProps {
    placetext: string | number,
    onPress :()=>void,
    buttonConatinerStyle ?: ViewStyle,
    img ?: JSX.Element,
    
}   
const CustomButton = (props:buttonProps) => {
    const {placetext}=props
  return (
    <LinearGradient colors={['#CEC9F2','#9C9FF0']} style={[styles.buttonLinearGradient,props.buttonConatinerStyle]} >
        <TouchableOpacity onPress={props.onPress} style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.buttonText} >{props.placetext}</Text>
            <View style={styles.imageStyle}>
                {props.img }
            </View>
            
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonLinearGradient:{
        width:windowWidth/1.1,
        height:windowHeight/13,
        borderRadius:10,
        marginBottom:12, 
        marginTop:10,                                                                          
        left:15,
        justifyContent:'center',
        alignItems:'center', 
    },
    buttonText:{
        // left:148,
        
        fontSize:17,
        fontWeight:'700',
        color:'#FFFFFF',
    },
    imageStyle:{
       marginTop:10,
       marginLeft:10,
    }
})
