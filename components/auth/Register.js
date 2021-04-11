import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'




export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }

        this.onSignup = this.onSignup.bind(this)
    }
    onSignup() {

    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => this.onSignup()}
                    title="Sign up"
                />
            </View>
        )
    }
}

export default Register
