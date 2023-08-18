import { View, Text, Button } from 'react-native'
import React from 'react'

const BottomTabs = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>BottomTabs Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('DetailsScreen')}
        />
    </View>
);

export default BottomTabs