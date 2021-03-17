import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    StatusBar
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image} />
                <Text style={styles.title}>Pesca Peixe</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif',
        height: 30,
        fontSize: 28,
        paddingLeft: 20,
    }
})

export default Header