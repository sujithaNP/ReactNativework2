import { View, Text, LogBox } from 'react-native'
import React from 'react'
import Home from './src/pages/home/Home'
import Welcome from './src/pages/Welcome/Welcome'
import Parking from './src/pages/parkingplaces/Parking'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/pages/screens/OnboardingScreen'
import UserSignup from './src/pages/userSignUp/UserSignup'
import SignUP from './src/pages/signup/SignUP'
import SignupWith from './src/pages/signupWith/SignupWith'
import Profile from './src/pages/profile/Profile'
import ProfileFill from './src/pages/profile2/ProfileFill'
import Login from './src/pages/login/Login'
import LoginAccount from './src/pages/loginAccount/LoginAccount'
import LoginThirdPage from './src/pages/loginThirdPage/LoginThirdPage'
import ForgotPassword from './src/pages/forgotPassword/ForgotPassword'
import Forgot2 from './src/pages/forgotPasswordSecondPage/Forgot2'
import CreateNewPaaword from './src/pages/createNewPassword/CreateNewPaaword'
import MapDirection from './src/pages/mapDirection/MapDirection'
import Routes from './src/routes/Routes'


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Routes/>
    



    // 
    // <View>
    //   <Home/>
    //   {/* <Welcome/> */}
    // </View>
  );

}

export default App