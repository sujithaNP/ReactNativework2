import {Dimensions, StyleSheet} from 'react-native'
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    arrow:{
        marginTop:27,
        marginLeft:20,
        marginBottom:30,
    },
    baseText:{
        marginTop:20,
        marginLeft:20,
        marginBottom:30,
        color:'#212121',
        fontSize:24,
        fontWeight:'700',
        fontFamily:'Urbanist-Regular', 
    },
    input:{
        height: 50,
        width:350,
        marginLeft: 10,
        // borderWidth: 1,
        borderRadius:10, 
        // borderColor:"gray",
        padding: 10,
        backgroundColor:"#F8F7FD",
        marginBottom:10,
    
    },
    buttonLinearGradient:{
        width:windowWidth/1.2,
        height:54,
        borderRadius:10,
        marginBottom:12, 
        marginTop:6,                                                                          
        left:15, 
    },
    buttonText:{
        left:148,
        top:15,
        fontSize:17,
        fontWeight:'700',
        color:'#FFFFFF',
        
        // left:82,
    },
    
    continueText:{
        height: 40,
        width:350,
        marginLeft:12,
        marginTop:-30,
        color:'#9E9E9E',
        fontSize:14,
        fontWeight:'600',
        fontFamily:'Urbanist-Regular',
        // backgroundColor:"#F8F7FD",
        borderRadius:10, 

    },
    box:{
        marginBottom:20,
    },
    icons:{
        height: 55,
        width:350,
        marginLeft: 12,
        borderRadius:10, 
        padding: 10,
        backgroundColor:'#FAFAFA'
        
        
    
    },
    iconStyle:{
        marginLeft:300,
        marginTop:7,
       
    },
    flagStyle:{
        marginLeft:-29,
        marginTop:7,
    },
    nameText:{

    },
    continue:{
        // height: 50,
        width:350,
        marginLeft:72,
        marginTop:-30,
        color:'#9E9E9E',
        fontSize:14,
        fontWeight:'600',
        fontFamily:'Urbanist-Regular',
        // backgroundColor:"#F8F7FD",
        borderRadius:10, 

    },
    union:{
        position:'absolute',
        marginLeft:45,
        marginTop:25,

    },
    down:{
        marginLeft:300,
        marginTop:-20,
       
        
    },
    genderText:{
        color:'#9E9E9E',
        fontFamily:'Urbanist-Regular',
    }
})