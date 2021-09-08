import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export function ExpertScreen() 
{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.sobre} onPress={() => { navigation.navigate('ProfileScreen') }}>
                <Text>Quero saber mais</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    sobre: {
        width: 300,
        height: 45,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});