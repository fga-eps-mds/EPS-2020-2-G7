import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default props => (
        <Stack.Navigator initialRouteName = "Register"
            screenOptions = {{ headerShown: true }}>

        <Stack.Screen name = "Register"
            options = {{ title: 'Informações Iniciais' }}>
        
        {props => (
            <PassoStack {...props} avancar = "Login">
                <Register />
            </PassoStack>
        )}
        
        </Stack.Screen>
        <Stack.Screen name = "Login" component={Login} />

      </Stack.Navigator>
)