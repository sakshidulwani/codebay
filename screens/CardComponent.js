import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  width,
  Dimensions,
  SPACING_FOR_CARD_INSET,
} from 'react-native';
//import {Card} from 'react-native-shadow-cards';
import CardView from 'react-native-cardview';
import {Card} from 'react-native-paper';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const CardStack = createStackNavigator();
const CardStackScreen = ({navigation}) => {
  return (
    <CardStack.Navigator
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
      <CardStack.Screen
        name=" Explore "
        component={CardComponent}
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
    </CardStack.Navigator>
  );
};
export default CardStackScreen;

const CardComponent = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#fff',
      }}>
      <CardView
        cardElevation={24}
        cardMaxElevation={24}
        cornerRadius={30}
        style={{
          width: 350,
          height: 280,
        }}>
        <Image
          source={require('./HomeImage.jpg')}
          style={{
            width: 350,
            height: 280,
          }}
        />
      </CardView>

      <ScrollView
        // horizontal={true}

        horizontal={true}
        paddingHorizontal={10}
        decelerationRate={0}
        snapToInterval={300}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        // horizontal={true}
        //decelerationRate={0}
        // snapToAlignment={'center'}
      >
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 1 </Text>

            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester1')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>

        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 2 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester2')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 3 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester3')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 4 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester4')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 5 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester5')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 6 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester6')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 7 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester7')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
        <View style={styles.MainContainer}>
          <CardView
            style={styles.cardViewStyle}
            cardElevation={20}
            cardMaxElevation={10}
            cornerRadius={20}>
            <Text style={styles.cardView_InsideText}> Semester 8 </Text>
            <Image
              source={require('./Calender.webp')}
              style={{height: 140, width: 140}}
            />

            <Card style={styles.cardViewStyles}>
              <TouchableOpacity
                style={{paddingTop: 15}}
                onPress={() => navigation.navigate('Semester8')}>
                <Text style={styles.textSign}>Explore Codes</Text>
              </TouchableOpacity>
            </Card>
          </CardView>
        </View>
      </ScrollView>
    </View>
  );
};
//export default CardComponent;
const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  MainContainer: {
    backgroundColor: '#fff',

    paddingHorizontal: 30,

    paddingTop: 60,
    alignItems: 'center',
  },

  cardViewStyle: {
    padding: 15,
    width: 250,
    height: 290,
    elevation: 24,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    backgroundColor: 'gold',
    alignItems: 'center',
  },
  cardViewStyles: {
    width: 250,

    height: 70,
    elevation: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    backgroundColor: 'white',
    alignItems: 'center',
  },

  cardView_InsideText: {
    fontSize: 41,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: '#000',
    fontFamily: 'Roboto',
    marginTop: 5,
    paddingBottom: 5,
  },
  textSign: {
    //paddingTop: 10,

    // borderWidth: 0.3,
    // borderRadius: 20,

    color: 'black',
    backgroundColor: 'rgba(80, 80, 80, 0.1)',
    fontWeight: 'bold',
    fontSize: 27,
    fontFamily: 'Roboto',
  },
});
