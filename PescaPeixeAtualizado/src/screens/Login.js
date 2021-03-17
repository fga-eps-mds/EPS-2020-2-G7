import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Header from '../components/Header'
import Estilo from '../components/estilos/loginAndRegister'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style = {Estilo.container}>
            <Header />

            <TextInput placeholder = 'Email' style = {Estilo.input}
            keyboardType = 'email-address'
            onChangeText={email => setEmail(email)} //****/
            value = {email}
            />

            <TextInput placeholder = 'Senha' style = {Estilo.input}
            secureTextEntry = {true}
            onChangeText = {password => setPassword( password )} 
            value = {password}
            />

            <View style = {Estilo.buttonGroup}>
                <TouchableOpacity onPress = { () => { } } style = {Estilo.button}>
                    <Text style = { Estilo.buttonText }>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default Login

// state = {
//     name: '',
//     email: '',
//     password: ''
// }