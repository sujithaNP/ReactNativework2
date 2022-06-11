import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export interface cardProps {
    img : JSX.Element,
    cardText: String | number ,
    cardParaText : String | number ,
    cardTextStyle ?: ViewStyle  ,
    cardParaTextStyle ?: ViewStyle ,
}
const Card = (props:cardProps) => {
    return (
        <View style={styles.cardStyle}>
            {props.img}
            <View>
                <Text style={props.cardTextStyle}>{props.cardText}</Text>
                <Text style={props.cardParaTextStyle}>{props.cardParaText}</Text>
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardStyle:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'center',
        width:windowWidth/1.1,
        height:windowHeight/7,
        backgroundColor:'#FFFFFF',
        borderRadius:16,
        marginTop:20,
        padding:10,
        
        

    }
})