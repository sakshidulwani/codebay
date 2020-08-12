import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Semester7Stack = createStackNavigator();
const Semester7StackScreen = ({navigation}) => {
  return (
    <Semester7Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester7Stack.Screen name="Semester7" component={Semester7Screen} />
    </Semester7Stack.Navigator>
  );
};
export default Semester7StackScreen;
const Semester7Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome </Text>
    </View>
  );
};
