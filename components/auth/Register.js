import React, { Component } from 'react'
import { View, Button, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign';
import firebase from 'firebase'
import "firebase/firestore";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.title}>Crear Cuenta</Text>
                    <View style={styles.containerInput}>
                        <View style={styles.input}>
                        <Icon name="user" size={20} />
                        <TextInput style={styles.paddingHorizontal}
                            placeholder="Nombre Completo"
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </View>
                    <View style={styles.input}>
                        <Icon name="mail" size={20} />
                        <TextInput style={styles.paddingHorizontal}
                        placeholder="Correo"
                        onChangeText={(email) => this.setState({ email })}
                    />
                    </View>
                    <View style={styles.input}>
                        <Icon name="lock" size={20} />
                        <TextInput style={styles.paddingHorizontal}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    </View>
                    <View style={styles.input}>
                        <Icon name="lock" size={20} />
                        <TextInput style={styles.paddingHorizontal}
                        placeholder="Confirmar Contraseña"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    </View>
                    <View style={{ alignItems: "flex-end", marginTop: 45,}}>
                            <TouchableOpacity
                                style={styles.containerBoton}
                                onPress={() => this.onSignUp()}
                            >
                                <Text style={{ paddingHorizontal: 11, fontFamily: "Bold", fontSize: 18, color: "#FFFFFF" }}>Registrarse</Text>
                                <Icon name="arrowright" color="#FFFFFF" size={18} />
                            </TouchableOpacity>
                        </View>
                    
                    </View>
                    <View style={{position: 'absolute', bottom: 0, flexDirection: "row", paddingHorizontal: 50 }}>
                        <Text>Ya tiene cuenta?</Text>
                        <TouchableOpacity
                                onPress={() =>this.props.navigation.navigate("Landing")}
                            >
                                <Text style={{ color:"#E8B800", paddingHorizontal:10 }}>Inicie sesión</Text>
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
        backgroundColor: "#FFF",
        // justifyContent: "center",
        flexDirection: "row",
        height: "100%"
    },
    container: {
        flex: 1,
        margin: 30,
    },
    title: {
        fontFamily: "Bold",
        marginTop: 140,
        marginBottom: 12,
        fontSize: 48,
    },
    input: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
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
        paddingVertical: 10
    },
    containerInput: {
        marginVertical: 10,
    },
    paddingHorizontal:{
        paddingHorizontal: 10,
    },
    containerBoton: {
        marginHorizontal: 17,
        backgroundColor: "#E8B800",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        elevation: 8,
        borderRadius: 20
    },
});
