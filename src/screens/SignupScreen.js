import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomerRegister from '../Components/signupScreen/CustomerRegister'

const SignupScreen = ({ navigation }) => (
    <View style={styles.container}>
        <CustomerRegister navigation={navigation} />
    </View>
)

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
