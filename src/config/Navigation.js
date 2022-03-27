import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Componets/Home'
import App from '../Componets/user_Reg'

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home App" component={App} options={{headerShown:false}} />

          <Stack.Screen name="User Profile" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default Navigation;