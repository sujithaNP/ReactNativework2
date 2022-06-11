import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './SelectVehicle.style'
import CustomButton from '../../components/Button'
import SearchResult from '../../components/SearchBttonResult'


interface dataType {
    id:number,
    title:string,
}
const SelectVehicle = () => {
    const handleRemove=(id:number)=>{
        const newData = data.filter((data)=>data.id !=id)
        setData(newData)


    }
    const handleResults = () => {
        setData([...data, {
            id: (data.length + 1),
            title: `item ${data.length + 1}`

        }])

    }
    const [data, setData] = useState<dataType[]>( [
        {
            id: 1,
            title: 'item 1'

        },
        // {
        //     id: 2,
        //     title: 'item 2'
        // },
        // {
        //     id: 3,
        //     title: 'item 3'
        // },
    ])
    return (
        <View>
            <CustomButton onPress={handleResults} placetext={'Results'} />
            <FlatList
                data={data}
                // key={item => item.id}
                keyExtractor={(item,index )=>index.toString()}
                renderItem={({ item }) => <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'red', margin: 15,borderRadius:5 }}>
                    <Text
                        style={{ fontSize: 36, color: 'white', }}
                    >
                        {item.title}</Text>
                        <TouchableOpacity onPress={()=>{handleRemove(item.id)}}>
                            <Text style={{ fontSize: 16, color: 'blue', }}>Remove</Text>

                        </TouchableOpacity>
                    
                </View>}    
            />




        </View>
    )
}

export default SelectVehicle

