import { View, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../Components/home/BottomTabs'

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <BottomTabs navigation={navigation} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default HomeScreen
