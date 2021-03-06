import { StatusBar } from "expo-status-bar";
import React from "react";
<<<<<<< HEAD
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
=======
import { Text, StyleSheet, Image, View, TextInput, Button, TouchableOpacity } from "react-native";
>>>>>>> bb2b6b909c649363086bf03b0f34b24f858252a6

export default function Login(){
    return(

<<<<<<< HEAD
        <View style={styles.container}>
            <Image
                styles={styles.logo}
                source={require('../img/Logo-png.png')}
            />  
            <Text style = {styles.logo}>LOGO</Text>
=======
        <View style={styles.container}>  

            <Image
                style={styles.logo}
                source={require('../img/Logo-png.png')}
            />

>>>>>>> bb2b6b909c649363086bf03b0f34b24f858252a6
            <Text style= {{fontWeight: 'bold', paddingTop: 70 }}>Seja bem vindo (a)</Text>
            <Text style={{paddingBottom: 50, marginTop: 20}}>Faça login</Text>
        
        <TextInput
        style={styles.InputLogin}
        placeholder= "E-mail"
        ></TextInput>

        <TextInput
        secureTextEntry={true}
        style={styles.InputLogin}
        placeholder= "Senha"
        ></TextInput>

      <TouchableOpacity style = {styles.ButtonForget}>
          <Text style = {{color:'#448893'}}>Esqueceu sua senha?</Text>
      </TouchableOpacity>


      <TouchableOpacity style = {styles.ButtonEnter}>
          <Text style = {{color:'#FFF', fontWeight: 'bold'}}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style = {{textAlign: 'center', padding: 10}}>Não possui conta?</Text>
        
      <TouchableOpacity style = {styles.ButtonCreate}>
          <Text style = {{color:'#448893', fontWeight: 'bold'}}>CRIAR CONTA</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.ButtonTerms}>
          <Text style = {{color:'#448893', fontSize: 12}}>Termos e Condições e Política de Privacidade</Text>
      </TouchableOpacity>

        <StatusBar style = "auto"/>
        </View>

     
    );
}

const styles = StyleSheet.create({
    container: {
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

    },

    ButtonForget: {
        marginLeft: -180,
        marginBottom: 10,
        padding: 10,
    },

    ButtonEnter: {
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
    },

    ButtonCreate: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        width: 320,
        height: 45,
        textAlign: 'left',
        borderColor: '#448893',
        margin: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ButtonTerms: {
        padding: 10,
        marginTop: 18,
    },

});
   
