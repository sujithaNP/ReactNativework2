import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface ResultProps{
    title: string | number,
    img:JSX.Element,
}

const SearchResult = (props:ResultProps) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text>{props.title}</Text>
      {props.img}
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({})