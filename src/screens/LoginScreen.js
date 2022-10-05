import React from 'react'
import { View, Button, TextInput } from 'react-native'


//elements needed on screen: user, password, and login button.


const LoginScreen = (props) => {
    const navigation = props.navigation
    return (
        <View>
            
            <TextInput title="User" placeholder='User:'/>
            <TextInput title="Password" placeholder='Password:'/>

            <Button title="Let me in!" onPress={
                () => { navigation.navigate('Home') }
            } />
        </View>
    )
}

export default LoginScreen