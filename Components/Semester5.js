import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Semester5Stack = createStackNavigator();
const Semester5StackScreen = ({navigation}) => {
  return (
    <Semester5Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester5Stack.Screen name="Semester5" component={Semester5Screen} />
    </Semester5Stack.Navigator>
  );
};
export default Semester5StackScreen;
const Semester5Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome </Text>
    </View>
  );
};
