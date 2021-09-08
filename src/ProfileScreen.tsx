import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function ProfileScreen()
{
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonX}
                onPress={ () => { navigation.navigate('Logout') } }
            >
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
        marginTop: -10
    },
    buttonX: {
        width: 300,
        height: 45,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

