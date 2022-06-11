import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface InputComponents { img: React.ReactElement, image: React.ReactElement,  isSecureEntry: boolean }
const InputField = (props: InputComponents) => {

    return (

        <View style={styles.box}>
            <View style={{ position: 'relative' }}>

                <TextInput style={styles.continueText}
                    
                    autoCorrect={false}
                    secureTextEntry={props.isSecureEntry} />

                {props.img}
                {props.image}

            </View>
        </View>

    )
}

export default InputField

const styles = StyleSheet.create({
    box: {
        marginBottom: 10,
        marginLeft: 10,
        height: windowHeight / 12,
        width: windowWidth / 1.1,
        backgroundColor: "#F8F7FD",

    },

    continueText: {
        height: windowHeight / 12,
        // width: windowWidth / 1.2,

        marginLeft: 70,
        marginRight: 30,
        // marginTop: 30,
        color: '#9E9E9E',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Urbanist-Regular',
        // backgroundColor: "#F8F7FD",
        borderRadius: 10,
        position: 'relative',

    },
})