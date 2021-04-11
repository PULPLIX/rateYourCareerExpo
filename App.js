import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigarionContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '//components/auth/Landing'



export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigarionContainer>
      <Stack.Navigator initialRoutName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigarionContainer>

  );
}

const styles = StyleSheet.create({

});
