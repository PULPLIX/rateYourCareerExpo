//Componentes principales de react y rect-native
import React, { Component } from 'react'
import { Text, View } from 'react-native'

//Importación de componentes de redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//Se importa la función para obtener el usuario en sesión por medio de redux
import { fetchUser } from '../redux/actions/index'

//Importación de iconos y barra de navegación
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Importación de las vistas
import ProfileScreen from './main/Profile'
import FeedScreen from './main/Feed';
import AddScreen from './main/Add';

const Tab = createBottomTabNavigator();

export class Main extends Component {
    //En el momento que se realiza el login se hace una búsqueda en la base de datos 
    //para  "setear" el estado de usuario con redux
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <Tab.Navigator  >

                <Tab.Screen name="Add" component={AddScreen}
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
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator >
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
