//Componentes principales de react y rect-native
import React, { Component } from 'react'
import { Text, View } from 'react-native'

//Importación de componentes de redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//Se importa la función para obtener el usuario en sesión por medio de redux
import { fetchUser } from '../redux/actions/index'


//Importación de iconos y barra de navegación
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Importación de las vistas
import ProfileScreen from './main/Profile'
import FeedScreen from './main/Feed';
import SearchScreen from './main/Search';

//Importación de firebase
import firebase from 'firebase'

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    return (null);
};

export class Main extends Component {

    //En el momento que se realiza el login se hace una búsqueda en la base de datos 
    //para  "setear" el estado de usuario con redux
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <Tab.Navigator initialRoutName="Feed" labeled={false}
                activeColor="#f0edf6"
                barStyle={{ backgroundColor: '#506AD4' }}
            >
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}

                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Feed" component={FeedScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Profile", { uid: firebase.auth().currentUser.uid })
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Search" component={SearchScreen} navigation={this.props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
