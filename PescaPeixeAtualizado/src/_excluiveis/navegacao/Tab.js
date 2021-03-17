import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Register from '../../screens/Register'
import Login from '../../screens/Login'

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>

        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 30}
        }}>

        <Tab.Screen name = "Register" component={Register} />
        <Tab.Screen name = "Login" component={Login} />

      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default Navigator