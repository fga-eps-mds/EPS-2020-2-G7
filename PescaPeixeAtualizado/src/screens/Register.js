import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Header from '../components/Header'
import Estilo from '../components/estilos/loginAndRegister'

function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style = {Estilo.container}>
            <Header />

            <TextInput placeholder = 'Nome' style = {Estilo.input}
            //autoFocus = {true}
            onChangeText={name => setName(name)} //****/
            value = {name}
            />

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
                <TouchableOpacity
                    onPress = { () => { } } style = {Estilo.button}>
                    <Text style = { Estilo.buttonText }>Realizar Cadastro</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default Register


// import { connect } from 'react-redux'
// import { createUser } from '../store/actions/user'

// state = {
//     name: '',
//     email: '',
//     password: ''
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onCreateUser: user => dispatch(createUser(user)) //ERRO TALVEZ
//     }
// }

//export default connect(null, mapDispatchToProps)(Register)