import React from "react";
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

export function RecorverPass(){
    return(

        <View style={styles.container}>


            <Image
                style={styles.logo}
                source={require('../img/Logo-png.png')}
            />
    <Text style = {{fontWeight: 'bold', paddingTop: 90 }}>Esqueci minha senha</Text>
    <Text style = {{paddingTop: 26 }}>Informe o e-mail de recuperação</Text>

    <TextInput
    style={styles.InputLogin}
    placeholder= "E-mail"
    ></TextInput>

    <TouchableOpacity style = {styles.ButtonSend}>
    <Text style = {{color:'#FFF', fontWeight: 'bold'}}>ENVIAR</Text>
    </TouchableOpacity>

    </View>

    );
}

const styles = StyleSheet.create({
        container:{
        flex: 1,
        alignItems:'center',
        //justifyContent: 'center',
},

logo: {
    marginTop: 90,
    width: 90,
    height: 90

},

InputLogin: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    width: 320,
    height: 45,
    textAlign: 'left',
    borderColor: '#bcbcbc',
    margin: 12,
    marginTop: 90,

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
},

});
