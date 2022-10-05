import React from 'react'
import { View, Text, StyleSheet, Style } from 'react-native'

const AboutScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>About</Text>
            <Text> Developed by Lisia Maria Becker Tabalipa</Text>
            <Text style={styles.textStyle}>Version</Text>
            <Text>FirstApp version 1.0</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'black',
        padding: 2,
        paddingLeft: 4,
    }
})

export default AboutScreen