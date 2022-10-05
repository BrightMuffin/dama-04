import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View>
            <Text>Welcome Lys to our first project!</Text>
            <Text>Now we can navigate between screens!</Text>
            <Text>How are you feeling?</Text>

            <Button title="User Details" onPress={
                () => { navigation.navigate('UserDetails') }
            } />

    <Button title="About" onPress={
                () => { navigation.navigate('About') }
            } />

        </View>
    )
}





export default HomeScreen