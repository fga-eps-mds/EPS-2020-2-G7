import React from 'react'
import { Text } from 'react-native'
import Estilo from '../components/estilo'


export default (param) => {
    //console.warn(param)
    return(
    <Text style={Estilo.txtG}>
        O valor X é maior do que o valor Y!
    </Text>
    )
}