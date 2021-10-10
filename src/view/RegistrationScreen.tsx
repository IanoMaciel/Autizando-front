import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Check } from '../components/Check';


export function RegistrationScreen()
{
    return(
        <View style={styles.container}>
            
            <Image
                style={styles.logo}
                source={require('./img/Logo-png.png')}
            />
            <Text style={{fontWeight:'bold', paddingTop:70}}>Seja bem vindo(a)</Text>
            <Text style={{marginTop: 10, paddingBottom: 50}}>Cadastra-se</Text>

            <TextInput
                style={styles.inputCad}
                placeholder="Nome"
            ></TextInput>

            <TextInput
                style={styles.inputCad}
                placeholder="E-mail"
            ></TextInput>
            
            <TextInput
                secureTextEntry={true} 
                style={styles.inputCad}
                placeholder="Senha"
            ></TextInput>

            <View style={styles.termo}>
                <Check/>
            </View>

            <TouchableOpacity style={styles.buttonCad}>
                <Text style={{color:'#000', fontWeight: 'bold'}}>CADASTRAR</Text>
            </TouchableOpacity>

            <Text>Já possui conta?</Text>

            <TouchableOpacity style={styles.buttonEntry}>
                <Text style={{color:'#448893', fontWeight: 'bold'}}>ENTRE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        marginHorizontal:16
    },
    logo: {
        marginTop: 90,
        width: 90,
        height: 90
    }, 
    inputCad: {
        width: 320,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#bcbcbc',
        padding:10
    },
    termo: {
        width: 310,
        marginLeft: -20
    },
    buttonCad: {
        width: 320,
        height: 45,
        margin: 12,
        borderRadius: 30,
        backgroundColor: '#cbcbcb',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonEntry: {
        width: 320,
        height: 45,
        margin: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#448893',
        backgroundColor: '#fff',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});