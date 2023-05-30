import { TextInput, SafeAreaView, StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const RegisterScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState('')
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter Your Name"
                />
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
                <Button title='Register' />
            </SafeAreaView>
            <View style={{ flexDirection: 'row', marginTop: 20}}>
                <Text>Already have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: 'blue'}}> Login</Text>
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
        borderRadius: 5,
    },
    wrapper: {
        width: '80%'
    }
});

export default RegisterScreen