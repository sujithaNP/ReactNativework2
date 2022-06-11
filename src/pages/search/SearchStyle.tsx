import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    bottomLineStyle:{
        borderBottomWidth:1,
        marginTop:25,
        width:windowWidth/1.12,
        alignSelf:'center',
        borderBottomColor:'#EEEEEE'

    },
    recentText:{
        color:'#212121',
        fontSize:15,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular',
        marginLeft:15,
        marginTop:17,
        
    },
    filterText:{
        color:'#212121',
        fontSize:22,
        fontWeight:'700',
        alignSelf:'center',
        marginTop:30,

    },
    sortText:{
        color:'#212121',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular',
        marginLeft:20,
        marginTop:30,
        marginBottom:30,

    },
    seeAllText:{
        color:'#4448AE',
        fontSize:14,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular',
        marginRight:25,
        marginTop:30,
    },
    distanceText:{
        fontFamily:'Urbanist-Regular',
        color:'#212121',
        fontSize:16,
        fontWeight:'700',
        marginLeft:15,
        marginTop:20,
        marginBottom:10,

        
    },
    parkingText:{
        color:'#212121',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular',
        marginLeft:15,
    }

})