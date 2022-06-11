import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        
        width:'100%',
        height:'100%',
        alignItems:'center',
       
    },
    welcomeImage:{
        top:50, 
    },
    welcomeText:{
        color:"#212121",
        fontSize:42,
        fontWeight:'400',
        marginTop:25,
        // marginLeft:-1,
        left:-38,
        fontFamily:'Urbanist-Bold',
    },
    container2:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        
       
    },
    baseText:{
        color:'#4448AE',
        fontSize:60,
        fontWeight:'900',
        left:-38,
        fontFamily:'Urbanist-ExtraBold',
        
    },
    paraText:{
        width:330,
        fontSize:16,
        fontWeight:'600',
        color:'#4448AE',
        lineHeight:25,
        marginBottom:16,
        left:-10,
        fontFamily:'Urbanist-Bold',
        marginTop:20,
        

    },
    buttonLinearGradient:{
        width:380,
        height:60,
        borderRadius:10,
        marginBottom:16,
        left:8,
    },
    buttonText:{
        left:168,
        top:15,
        fontSize:17,
        fontWeight:'700',
        color:'#FFFFFF',

    },
    secondButton:{
        width:380,
        height:58,
        borderRadius:10,
        backgroundColor:'#CCCAF366',
        left:8,
    },
    skipText:{
        fontSize:16,
        fontWeight:'700',
        color:'#4D5DFA',
        left:168,
        top:14,
    }
})