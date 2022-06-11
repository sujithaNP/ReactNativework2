import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignSelf:'flex-end',
    },
    headerImage:{
        marginTop:-15,
    },
    headerSearchImage:{
        marginRight:20,

    },
    detailsText:{
        textAlign:'center',
        color:'#212121',
        fontSize:22,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular',
        marginTop:25,

    },
    bottomLineStyle:{
        borderBottomWidth:1,
        marginTop:25,
        width:windowWidth/1.12,
        alignSelf:'center',
        borderBottomColor:'#EEEEEE'

    },  
    imageCarStyle:{
        alignSelf:'center',
        marginTop:10,
    },
    parkingText:{
        color:'#212121',
        fontSize:24,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular',
        marginLeft:30,
       
    },
    parkingParaStyle:{
        color:'#616161',
        fontSize:15,
        fontWeight:'500',
        fontFamily:'Urbanist-Regular',
        marginLeft:30,
        marginBottom:30,
    },
    imageStyle:{
        marginRight:30,
        marginTop:15,
        
    },
  
    
})