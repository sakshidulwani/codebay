import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Semester4Stack = createStackNavigator();
const Semester4StackScreen = ({navigation}) => {
  return (
    <Semester4Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester4Stack.Screen name="Semester4" component={Semester4Screen} />
    </Semester4Stack.Navigator>
  );
};
export default Semester4StackScreen;
const Semester4Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome </Text>
    </View>
  );
};
