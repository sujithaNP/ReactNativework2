import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const CustomBox = ({img,smsText,num}) => {
  return (
    <View>
      <SafeAreaView >
          <View style={{flexDirection:'row',width:350,height:100,borderWidth:1,backgroundColor:'#FFFFFF', borderColor:'#EEEEEE',borderRadius:10,marginLeft:30,marginTop:10}}>
              {img}
                <View style={styles.box}>
                  <Text style={styles.sms} >{smsText}</Text>
                  <Text style={styles.num}>{num}</Text>


                </View>
          </View>
      </SafeAreaView>
    </View>
  )
}

export default CustomBox

const styles = StyleSheet.create({
    box:{
        marginTop:23,
        marginLeft:30,
    },
    sms:{
        fontSize:14,
        fontWeight:'400',
        color:'#757575',
        fontFamily:'Urbanist-Regular',

    },
    num:{
        color:'#212121',
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Urbanist-Bold',
    },
   
   
})