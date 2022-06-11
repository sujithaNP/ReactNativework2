import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SquareBox = ({code}) => {
  return (
    <View>
       <View style={styles.squreBox}>
          <Text style={styles.code}>{code}</Text>
        </View>
    </View>
  )
}

export default SquareBox

const styles = StyleSheet.create({
    squreBox:{
        width:60,
        height:60,
        backgroundColor:'#F8F7FD',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#F8F7FD',


    },
    code:{
        marginLeft:20,
        marginTop:12,
        fontSize:24,
        fontWeight:'400',
        fontFamily:'Urbanist-Bold'
    }
})