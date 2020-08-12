import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Semester2Stack = createStackNavigator();
const Semester2StackScreen = ({navigation}) => {
  return (
    <Semester2Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester2Stack.Screen name="Semester2" component={Semester2Screen} />
    </Semester2Stack.Navigator>
  );
};
export default Semester2StackScreen;
const Semester2Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome </Text>
    </View>
  );
};
