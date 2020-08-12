/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './screens/DrawerContent';

import AboutStackScreen from './screens/AboutScreens';
import ContactStackScreen from './screens/ContactScreen';
import CardStackScreen from './screens/CardComponent';

import SplashScreen from './screens/SplashScreen';
import Semester1StackScreen from './Components/Semester1';
import Semester2StackScreen from './Components/Semester2';
import Semester3StackScreen from './Components/Semester3';
import Semester4StackScreen from './Components/Semester4';
import Semester5StackScreen from './Components/Semester5';
import Semester6StackScreen from './Components/Semester6';
import Semester7StackScreen from './Components/Semester7';
import Semester8StackScreen from './Components/Semester8';

const SStack = createStackNavigator();
const Semester = ({navigation}) => {
  <SStack.Navigator headerMode="none">
    <SStack.Screen name="Semester1" component={Semester1StackScreen} />
    <SStack.Screen name="Semester2" component={Semester2StackScreen} />
    <SStack.Screen name="Semester3" component={Semester3StackScreen} />
    <SStack.Screen name="Semester4" component={Semester4StackScreen} />
    <SStack.Screen name="Semester5" component={Semester5StackScreen} />
    <SStack.Screen name="Semester6" component={Semester6StackScreen} />
    <SStack.Screen name="Semester7" component={Semester7StackScreen} />
    <SStack.Screen name="Semester8" component={Semester8StackScreen} />
  </SStack.Navigator>;
};
const Stack = createStackNavigator();
const Card = ({navigation}) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SplashScreen" component={SplashScreen} />

    <Stack.Screen name="Card" component={CardStackScreen} />

    <Stack.Screen name="Semester1" component={Semester1StackScreen} />
    <Stack.Screen name="Semester3" component={Semester3StackScreen} />
  </Stack.Navigator>
);
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Cards" component={Card} />

        <Drawer.Screen name="Card" component={CardStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
        <Drawer.Screen name="Contact" component={ContactStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
