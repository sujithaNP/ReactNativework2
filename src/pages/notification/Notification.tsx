import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/Button'
import { styles } from './Notification.style'
import Arrow from '../../components/Arrow'
import ArrowImage from '../../asset/Group.svg'
import CircleImage from '../../asset/Circledot.svg'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
import Card from '../../components/Card'
import CardImage from '../../asset/card.svg'
import CardCanceledImage  from '../../asset/card2.svg'
import VerificationCardImage from '../../asset/card3.svg'
import EwalletImage from '../../asset/card4.svg'
import VerificationSuccessImg from '../../asset/card5.svg'


const Notification = () => {
    return (
        <KeyboardAvoidingScrollView style={{padding:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Arrow headerTextStyle={{marginTop:10,marginLeft:20}} headerText={'Notification'} headerImage={<ArrowImage style={styles.arrow} />} />
                <CircleImage style={styles.circleStyle}/>
            </View>
            <View>
                <Text style={styles.todayText}>Today</Text>
            </View>
            <View>
                <Card cardParaTextStyle={styles.cardPara} cardTextStyle={styles.cardText} cardParaText={'Parking booking at Portley was succ...'} cardText={'Payment Successful!'} img={<CardImage/>}/>
                <Card cardParaTextStyle={styles.cardPara} cardTextStyle={styles.cardText} cardParaText={'You have canceled parking at Gouse..'} cardText={'Parking Booking Canceled'} img={<CardCanceledImage/>}/>
                <Text style={styles.todayText}>Yesterday</Text>
                <Card cardParaTextStyle={styles.cardPara} cardTextStyle={styles.cardText} cardParaText={'Google Authenticator set successful!'} cardText={'Parking Booking Canceled'} img={<VerificationCardImage/>}/>
                <Card cardParaTextStyle={styles.cardPara} cardTextStyle={styles.cardText} cardParaText={'Wallet has been connected to Parkir'} cardText={'E-Wallet Connected'} img={<EwalletImage/>}/>
                <Text style={styles.todayText}>December 11, 2024</Text>
                <Card cardParaTextStyle={styles.cardPara} cardTextStyle={styles.cardText} cardParaText={'Account verification complete'} cardText={'Verification Successful'} img={<VerificationSuccessImg/>}/>
                
            </View>
            

        </KeyboardAvoidingScrollView>
    )
}

export default Notification

