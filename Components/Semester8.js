import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Semester8Stack = createStackNavigator();
const Semester8StackScreen = ({navigation}) => {
  return (
    <Semester8Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester8Stack.Screen name="Semester8" component={Semester8Screen} />
    </Semester8Stack.Navigator>
  );
};
export default Semester8StackScreen;
const Semester8Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome </Text>
    </View>
  );
};
