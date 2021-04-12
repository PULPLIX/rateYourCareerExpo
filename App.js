//Importación de los elementos principales de react
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native'

//Importación y configuración de firebase
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWMb-O2sLWpAqnmKEg8HEYX8JZ4Xw7uhI",
  authDomain: "rateyourcareer.firebaseapp.com",
  projectId: "rateyourcareer",
  storageBucket: "rateyourcareer.appspot.com",
  messagingSenderId: "162692518385",
  appId: "1:162692518385:web:1795516c15d66f8767b450",
  measurementId: "G-11X0KMN6YJ"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
// Importaciones de dependencias de navegación

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

//Importación de componentes
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import MainScreen from './components/Main';



const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();


export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRoutName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    return (
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Main"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            shifting='true'
            barStyle={{ backgroundColor: '#694fad', paddingBottom: 48 }}
          >
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )

  }
}

export default App
