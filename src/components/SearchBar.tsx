import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export interface searchBar{
  img: JSX.Element,
  image:JSX.Element,
  onPress:()=>void,
}
const SearchBar = (props:searchBar) => {
  return (
    <View style={styles.searchBarStyle}>
      {props.img}
      <TextInput style={styles.inputfiledStyle}/>
      <TouchableOpacity onPress={props.onPress}>
        {props.image}
      </TouchableOpacity>
      
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBarStyle:{
    width:windowWidth/1.12,
    height:windowWidth/8,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#F8F7FD',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#4448AE',
    alignSelf:'center',
    marginTop:30


  },
  inputfiledStyle:{
    width:windowWidth/1.8
  }
})