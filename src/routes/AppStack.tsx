import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'


export type AppStackParamList = {
    Home:undefined;
    Login:undefined;
    SignUp:undefined;
}


const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerTitleAlign:'center',
        headerBackTitleVisible:false
    }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
    </Stack.Navigator>
  )
}

