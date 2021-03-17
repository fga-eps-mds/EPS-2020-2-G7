//import 'react-native-gesture-handler'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Register from '../../screens/Register'
import Login from '../../screens/Login'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName={'Register'}
        tabBarOptions={{ showLabel: false}}>

        <Tab.Screen
            name={'Feed'}
            component={Login}
            options={{
                title: 'Feed',
                tabBarIcon: ({ tintColor }) => (
                <Ionicons name="home" size={30} color={tintColor ? '#28527a' : '#000'} />
            ),
            }}
        />

        <Tab.Screen
          name={'Register'}
          component={Register}
          options={{
            title: 'Register',
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="settings" size={30} color={tintColor ? '#28527a' : '#000'} />
            ),
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default Navigator