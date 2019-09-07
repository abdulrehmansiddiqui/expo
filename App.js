import React, { Component } from 'react';
import {View,Text,StyleSheet,SafeAreaView,Platform,TouchableOpacity} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';


const Drawer = createDrawerNavigator({
  myHome:{
    screen:Home
  },
  myAbout:{
    screen:About
  }
})

const Stack = createStackNavigator({
  myHome:{
    screen:() => <DrawerContaner />
  },
  myLogin:{
    screen:Login
  }
},{
  headerMode:'none',
  initialRouteName:"myLogin"
})

const AppContainer = createAppContainer(Stack)
const DrawerContaner = createAppContainer(Drawer)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

