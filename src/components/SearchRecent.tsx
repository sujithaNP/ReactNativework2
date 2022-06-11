import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export interface searchProps{
    recentText : string | number;
    img:JSX.Element;
}

const SearchRecent = (props:searchProps) => {
  return (
    <View style={styles.searchStyle}>
      <Text style={styles.recentTextStyle}>{props.recentText}</Text>
      {props.img}
    </View>
  )
}

export default SearchRecent

const styles = StyleSheet.create({
    searchStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth/1.13,
        alignItems:'center',
        alignSelf:'center'

    },
    recentTextStyle:{
        color:'#757575',
        fontSize:16,
        fontWeight:'500',
        fontFamily:'Urbanist-Regular',
        marginTop:20,
    }

})