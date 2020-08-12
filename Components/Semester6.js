import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Semester6Stack = createStackNavigator();
const Semester6StackScreen = ({navigation}) => {
  return (
    <Semester6Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester6Stack.Screen name="Semester6" component={Semester6Screen} />
    </Semester6Stack.Navigator>
  );
};
export default Semester6StackScreen;
const Semester6Screen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome </Text>
    </View>
  );
};
