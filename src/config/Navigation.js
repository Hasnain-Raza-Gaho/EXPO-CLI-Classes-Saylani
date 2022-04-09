import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Componets/Home'
import App from '../Componets/user_Reg'
import About from '../Componets/About';
import Profile from '../Componets/Profile';
import Splash from '../Componets/SplashScreen'
import { useEffect, useState } from 'react';
import Firebase from "../Config/Firebase";
import Regsister from '../Componets/Regsister';
// import { useState } from 'react/cjs/react.production.min';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export function MyTabs({ route }) {
  console.log(route.params)
  const { Uid } = route.params

  const [usrreg, setreg] = useState(false)

  useEffect(() => {
    Firebase.database().ref("user").child(Uid).once("value").then((data) => {
      // console.log(data.val().blood_Group)
      if (data.val(). Blood_group == undefined || data.val(). Blood_group == null) {
        console.log("Not ")
        setreg(false)

      }
      else {
        setreg(true)

      }
    })


  },)
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Page" component={HomeScreen} />
      {usrreg ? <Tab.Screen name="User Data" component={()=><About uid={Uid}/>} />
        : <Tab.Screen name="Regsiter User" component={()=><Regsister uid={Uid}/>} />
      }
      <Tab.Screen name="Profile Page" component={() => <Profile uid={Uid} />} />




    </Tab.Navigator>
  );
}


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash Screen" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home App" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="Bottom Nav" component={MyTabs} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;