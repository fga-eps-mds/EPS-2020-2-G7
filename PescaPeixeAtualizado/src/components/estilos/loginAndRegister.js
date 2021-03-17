import{ StyleSheet } from 'react-native'

const loginAndRegister = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        margin: 20,
        padding: 10,
        backgroundColor: '#00BFFF'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    },
    buttonGroup: {
        flexDirection: 'row',
        alignContent: 'space-around'
    }
}

export default StyleSheet.create({
    ...loginAndRegister
})