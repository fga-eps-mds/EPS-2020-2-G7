import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Register from '../screens/Register'
import Login from '../screens/Login'

const Tab = createBottomTabNavigator();

const settings = (
	tabBarOptions={
		activeTintColor: '#00BFFF',
		inactiveTintColor: 'black',
		labelStyle: { fontSize: 18},
		showLabel: true,
	}
)

function MyTabs(){
	return(
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
			
						switch (route.name) {
							case 'Login':
								iconName = focused
								? 'log-in'
								: 'log-in-outline'
							break;
							case 'Cadastrar':
								iconName = focused
								? 'person-add'
								: 'person-add-outline'
							default:
								break;
						}

						return <Ionicons name={iconName} size={size} color={color} />;
				}
			})}
			tabBarOptions={settings}>
			
			<Tab.Screen name = 'Login' component={Login} />
			<Tab.Screen name = 'Cadastrar' component={Register} />
		</Tab.Navigator>
	)
}

function Navigator () {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  );
};

export default Navigator