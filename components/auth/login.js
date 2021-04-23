import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    iniciarSesion() {
        console.log('hola');
        const { email, password } = this.state;
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then((result) => {
        //         console.log(result)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        let body = {
            cedula: email,
            password
        }
        console.log(body);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: body
        };
        fetch('192.168.1.100:3000/getUser', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
        });
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="text"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    onPress={() => this.iniciarSesion()}
                    title="Sign In hola"
                />
            </View>
        )
    }
}