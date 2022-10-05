import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserDetailsScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>Name</Text>
            <Text>Lisia Maria Becker tabalipa</Text>
            <Text style={styles.textStyle}>Age</Text>
            <Text>17 years old</Text>
            <Text style={styles.textStyle}>Email</Text>
            <Text>lisia.becker@estudante.ifgoiano.edu.br</Text>



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

export default UserDetailsScreen