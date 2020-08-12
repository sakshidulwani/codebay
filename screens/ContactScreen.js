import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CardView from 'react-native-cardview';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
//import {Form, Item, Input, Body, CheckBox} from 'native-base';
const ContactStack = createStackNavigator();
const ContactStackScreen = ({navigation}) => {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'serif',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <ContactStack.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="md-menu"
              size={25}
              color="#000"
              backgroundColor="gold"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </ContactStack.Navigator>
  );
};
export default ContactStackScreen;
class ContactScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: ' ',
      email: ' ',
      Query: ' ',
    };
  }
  render() {
    return (
      <View style={styles.maincontainer}>
        <CardView
          style={styles.cardViewStyle}
          cardElevation={20}
          cardMaxElevation={10}
          cornerRadius={20}>
          <View style={{alignItems: 'center'}}>
            <Avatar.Image source={require('./ethena.jpg')} size={80} />
          </View>
          <View>
            <TextInput
              placeholder="Name"
              onChangeText={(text) => {
                this.setState({name: text});
              }}
              style={styles.Input}
            />

            <TextInput
              placeholder="E-mail"
              onChangeText={(text) => {
                this.setState({email: text});
              }}
              style={styles.Input}
            />

            <TextInput
              placeholder="Query"
              onChangeText={(text) => {
                this.setState({Query: text});
              }}
              style={styles.Input}
            />
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 35,
            }}>
            <Text style={styles.textSign}> Submit </Text>
          </TouchableOpacity>
        </CardView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('./contact.jpg')}
            style={{height: 240, width: 380}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#eee',
    paddingTop: 20,
  },
  cardViewStyle: {
    width: 340,
    height: 450,
    elevation: 24,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'gold',
  },

  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  textSign: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'white',
  },
});
