
import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Button } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign';

import firebase from 'firebase'

export default class Landing extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
        const { navigation } = this.props;
    }



    async onSignIn () {
        const { email, password } = this.state;
        let body = {
            cedula: email,
            password
        }
        console.log(body);
        let response = await fetch('http://192.168.1.100:3000/login?cedula='+email+'&password='+password, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                body
            })
        });
        let json = await response.json();
        console.log(json[0]);
        if(json[0].cedula){
            this.props.navigation.navigate("Main"); //aqui se cae ! redirigir a la pagina de inicio del sistema
        }
    }

    render() {

        return (

            <View style={styles.body}>
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.normal}>Iniciar Sesión</Text>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.input}>
                            <Icon name="mail" size={20} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                style={{ paddingHorizontal: 14 }}
                                placeholder="email"
                                onChangeText={(email) => this.setState({ email })}
                            />
                        </View>
                        <View style={styles.input}>
                            <Icon name="lock" size={20} />
                            <TextInput
                                placeholder="password"
                                underlineColorAndroid="transparent"
                                style={{ paddingHorizontal: 14 }}
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({ password })}
                            />
                        </View>
                        <View style={{ alignItems: "flex-end", }}>
                            <Text style={{ marginVertical: 10, marginHorizontal: 47, fontFamily: "Normal", fontSize: 12, color: '#F2CC39', }}>
                                Olvidé la contraseña
                            </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "flex-end", }}>
                        <TouchableOpacity
                            style={styles.containerBoton}
                            onPress={() => this.onSignIn()}
                        >
                            <Text style={{ paddingHorizontal: 11, fontFamily: "Bold", fontSize: 18, color: "#FFFFFF" }}>Login</Text>
                            <Icon name="arrowright" color="#FFFFFF" size={18} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 50, paddingHorizontal: 50, alignItems: "center" }}>
                        <Text>No tiene una cuenta?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{ color: "#E8B800", paddingHorizontal: 10 }}>Registrese</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#000000",
        // justifyContent: "center",
        flexDirection: "row",
        height: "100%"
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        width: 100,
        margin: 30,
        marginTop: 100,
        marginBottom: 100,
        borderRadius: 20,
    },
    title: {
        fontFamily: "Bold",
        marginTop: 120,
        marginBottom: 12,
        fontSize: 48,
    },
    containerTitle: {
        marginLeft: 34,
    },
    containerInput: {
        marginBottom: 65,
        marginTop: 50,
    },
    input: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        marginTop: 15,
        paddingHorizontal: 14,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },

        elevation: 2,
        borderRadius: 23,
        paddingVertical: 2
    },
    containerBoton: {
        marginHorizontal: 47,
        backgroundColor: "#E8B800",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        elevation: 8,
        borderRadius: 20
    },
    normal: {
        fontFamily: "Normal",
        fontSize: 18,
        color: '#797979',
    },
});