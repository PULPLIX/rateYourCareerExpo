import React from 'react'
import { Text, View, Button } from 'react-native';



export default function Landing({ navigation }) {
    return (
        <View style={style.container}>
            <Button
                title="Register"
                onClick={() => navigation.navigate("Register")} />
            <Button
                title="Login"
                onClick={() => navigation.navigate("Login")} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fex: 1,
        justifyContent: 'center'

    }
})