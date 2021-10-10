import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export function ProfileScreen()
{
    return (
        <View style={styles.container}>
            
            {/*profile information*/}
            <View style={styles.profile}>
                <Image
                    style={styles.profilePicture}
                    source={require('../img/iano_perfil.jpeg')}
                />
                
                <View style={styles.profileSobre}>
                    <Text style={{fontWeight:'bold', fontSize: 18, margin:10}}>Iano Maciel</Text>
                    
                    <View style={{flexDirection:'row', margin:10}}>
                        <Text style={{fontSize: 18, color: '#FADC7B', fontWeight:'bold'}}>Credencial</Text>
                        <Text style={{fontSize: 18, color: '#000'}}> / Amazonas</Text>
                    </View>

                    <Text style={{margin:10}}>Idioma(s): Portuguese and English</Text>

                    <Text style={{margin:15, fontSize: 20, fontWeight: 'bold'}}>R$60,00 - 60MIN</Text>

                    <Text style={{textAlign:'center'}}>Student at Universidade Federal do Amazonas | Software Engineering | Web Developer</Text>

                    <TouchableOpacity style={styles.profileButton}>
                        <Text style={{color: '#448893'}}>Chat com especialista</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    
                </View>

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    }, 
    profile:{
        alignItems: 'center',
        paddingBottom: 20,
        //borderBottomWidth: 2,
        borderColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 100
    },
    profileSobre: {
        padding: 10,
        alignItems: 'center'
    },
    profileButton: {
        width: 320,
        height: 45,
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#448893',
        backgroundColor: '#E0E9EA',
        borderRadius: 30,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

