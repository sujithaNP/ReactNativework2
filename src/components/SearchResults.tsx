import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface SearchProps{
    img : JSX.Element,
    searchText: string | number,
    detailsText:string | number,
    km:string | number,
    hour:string | number,

}

const SearchResults = (props:SearchProps) => {
  return (
    <View>
      {props.img}
      <View>
        <Text>{props.searchText}</Text>
        <Text>{props.detailsText}</Text>
      </View>
      <View>
          <Text>{props.km}</Text>
          <Text>{props.hour}</Text>
      </View>
      
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})