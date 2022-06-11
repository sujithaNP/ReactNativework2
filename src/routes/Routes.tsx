import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/Home';
import Welcome from '../pages/Welcome/Welcome';
import OnboardingScreen from '../pages/screens/OnboardingScreen';
import UserSignup from '../pages/userSignUp/UserSignup';
import SignupWith from '../pages/signupWith/SignupWith';
import Profile from '../pages/profile/Profile';
import Login from '../pages/login/Login';
import LoginAccount from '../pages/loginAccount/LoginAccount';
import LoginThirdPage from '../pages/loginThirdPage/LoginThirdPage';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Forgot2 from '../pages/forgotPasswordSecondPage/Forgot2';
import CreateNewPaaword from '../pages/createNewPassword/CreateNewPaaword';
import MapDirection from '../pages/mapDirection/MapDirection';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from '../pages/notification/Notification';
import HomeImage from '../asset/home.svg'
import SaveImage from '../asset/save.svg'
import BookingImage from '../asset/Booking.svg'
import ProfileImage from '../asset/Profile.svg'
import Search from '../pages/search/Search';
import Details from '../pages/details.tsx/Details';
import SelectVehicle from '../pages/selectVhicle/SelectVehicle';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const Routes = () => {
    const BottomStackScreen = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MapDirection} options={{
                    tabBarIcon:()=>(<HomeImage/>)
                }} />
                <Tab.Screen name="saved" component={Home} options={{
                    tabBarIcon:()=>(<SaveImage/>)
                }} />
                <Tab.Screen name="Booking" component={Home} options={{
                    tabBarIcon:()=>(<BookingImage/>)
                }}/>
                <Tab.Screen name="Profile" component={Home} options={{
                    tabBarIcon:()=>(<ProfileImage/>)
                }}/>

            </Tab.Navigator>

        )

    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='NavigationContainer' component={OnboardingScreen} />
                <Stack.Screen name='UserSignup' component={UserSignup} />
                <Stack.Screen name='SignupWith' component={SignupWith} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='LoginAccount' component={LoginAccount} />
                <Stack.Screen name='LoginThirdPage' component={LoginThirdPage} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='Forgot2' component={Forgot2} />
                <Stack.Screen name='CreateNewPaaword' component={CreateNewPaaword} />
                <Stack.Screen name='ParkingHome' component={BottomStackScreen} />
                <Stack.Screen name='Notification' component={Notification}/>
                <Stack.Screen name='Search' component={Search}/>
                <Stack.Screen name='Details' component={Details}/>
                <Stack.Screen name='SelectVehicle' component={SelectVehicle}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})