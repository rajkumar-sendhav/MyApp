import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomerLogin from '../Components/loginScreen/CustomerLogin'

const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <CustomerLogin navigation={navigation} />
    </View>
)

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
