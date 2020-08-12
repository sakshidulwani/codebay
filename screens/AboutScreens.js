import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';
const AboutStack = createStackNavigator();
const AboutStackScreen = ({navigation}) => {
  return (
    <AboutStack.Navigator
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
      <AboutStack.Screen
        name="About Us"
        component={AboutScreen}
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
    </AboutStack.Navigator>
  );
};
export default AboutStackScreen;
const AboutScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('./Image.jpg')} style={styles.image} />
        <Text style={styles.title}>What is CodeBay ?</Text>
        <Text style={styles.text}>
          <Text style={{fontWeight: 'bold'}}> Code-Bay </Text> is a derivative
          of {'\n'}
          <Text
            style={{
              fontWeight: 'bold',
              backgroundColor: 'lightblue',
              color: 'black',
            }}>
            {' '}
            Ethena Technologies{' '}
          </Text>
          , a company solely {'\n'} started with a purpose to innovate and
          integrate some brilliant minds and achieve respective ambitions.
        </Text>
        <Text style={styles.text}>
          In the Era of Tech revolutions, where {'\n'}
          each field is getting advanced day-by-day, {'\n'}
          many students still{' '}
          <Text style={{fontWeight: 'bold'}}>
            face various difficulties
          </Text>{' '}
          {'\n'} to
          <Text style={{fontWeight: 'bold'}}> Brush up there skills</Text>{' '}
          especially in {'\n'} the field of{' '}
          <Text style={{fontWeight: 'bold'}}>Computational Programming</Text>.
          {'\n'}
          So, <Text style={{fontWeight: 'bold'}}>Code-Bay</Text> helps students{' '}
          in finding top-notch materials and vast varieties of other valuable
          resources, to practice their skills which ultimately leads them to
          become a{' '}
          <Text style={{fontWeight: 'bold'}}>
            Skillful and a Proficient Developer
          </Text>
          .
        </Text>
        <Text style={styles.text}>
          Code-Bay also helps students in {'\n'} understanding the basic
          concepts of "Programming" thoroughly. It saves a
          <Text style={{fontWeight: 'bold'}}> Tons of Time </Text>
          by bringing all this at one place.
        </Text>
        <Text style={styles.text}>
          <Text style={{fontWeight: 'bold'}}> Code-Bay </Text> not only just
          helps the "Develpers-of-Tomorrow" in practicing their skills, it also{' '}
          <Text style={{fontWeight: 'bold'}}> guides </Text> them (through
          various activities) for producing, Efficient, Effective, {'\n'} and
          Adaptive projects.{' '}
          <Text style={{fontWeight: 'bold'}}> Code-Bay </Text> helps students to
          transform into a{' '}
          <Text style={{fontWeight: 'bold'}}> Proficient Developer :) </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
//export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    paddingTop: 15,
    fontSize: 35,
    fontWeight: 'bold',
    alignItems: 'center',
    fontFamily: 'sans-serif-condensed',
  },
  image: {
    width: 380,
    height: 300,
    paddingTop: 10,
  },
  text: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: 'sans-serif-condensed',
  },
});
