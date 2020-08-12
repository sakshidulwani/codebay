import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require('./logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>
          WELCOME TO {'\n'}
          CODEBAY !
        </Text>

        <Text style={styles.text}>
          Simple, optimized content to mug up syllabus at last moment.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Card')}>
            <LinearGradient colors={['gold', 'gold']} style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  text: {
    color: 'black',
    marginTop: 20,
    fontSize: 23,
    fontFamily: 'serif',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
