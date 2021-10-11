import React from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from "react-native";

export function RecorverPass2(){
    return(

        <View style={styles.container}>

        <Image
            style = {styles.logo}
            source={require('../img/Logo-png.png')}
        />
        <Text style = {{fontWeight: 'bold', paddingTop: 100, marginBottom: 30 }}>Esqueci minha senha</Text>
        <Text style = {{paddingTop: 26 }}>Insirra o código enviado para</Text>
        <Text style = {{color:'#448893', fontWeight:'bold'}}>nome@gmail.com</Text>

        <View style={styles.pass}> 
            <TextInput style={styles.InputPass}></TextInput>
            <TextInput style={styles.InputPass}></TextInput>
            <TextInput style={styles.InputPass}></TextInput>
            <TextInput style={styles.InputPass}></TextInput>
        </View>

        <TouchableOpacity style = {styles.ButtonSend}>
        <Text style = {{color:'#FFF', fontWeight: 'bold'}}>CONTINUAR</Text>
        </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    alignItems:'center',
    },

    logo: {
        marginTop: 90,
        width: 90,
        height: 90
    }, 
    pass: {
        marginTop: 40,
        marginBottom: 30,
        flexDirection: 'row',
        padding: 10
    },
    InputPass: {
        backgroundColor: '#d3d3d3',
        borderRadius: 12,
        margin: 10,
        padding: 15,
        textAlign: 'center'
    },
    ButtonSend: {
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        textAlign: 'left',
        borderColor: '#b8b7b8',
        margin: 12,
        backgroundColor: '#448893',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
});
