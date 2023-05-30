import { TextInput, SafeAreaView, StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Enter Your E-mail"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Enter Your Password"
                    keyboardType="numeric"
                    secureTextEntry
                />
                <Button title='Login' />
            </SafeAreaView>
            <View style={{ flexDirection: 'row', marginTop: 20}}>
                <Text>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{color: 'blue'}}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 12,
        borderRadius: 10,
    },
    wrapper: {
        width: '80%'
    }
});

export default LoginScreen