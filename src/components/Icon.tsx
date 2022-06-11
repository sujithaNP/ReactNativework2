import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomIcon =({img,iconName}:{img:JSX.Element;iconName:string})=>{

    return(
        <View style={styles.icon}>
         {img}
         <Text>{iconName}</Text>
         
         
        </View>
        
    )
}
export default CustomIcon

const styles = StyleSheet.create({
    icon:{
        width:60,
        height:60,
        borderWidth:1,
        // borderColor:'#EEEEEE',
        borderRadius:16,

    },
})