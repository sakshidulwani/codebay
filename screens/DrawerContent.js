/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  useTheme,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1, paddingTop: 30, backgroundColor: 'gold'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContainer}>
          <View style={{backgroundColor: 'gold'}}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image source={require('./logo.png')} size={80} />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>CODEBAY</Title>
                </View>
              </View>
            </View>
            <View style={styles.row}></View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="code-braces" color={color} size={size} />
              )}
              label="Explore"
              onPress={() => {
                props.navigation.navigate('Card');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="group" color={color} size={size} />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="message-outline" color={color} size={size} />
              )}
              label="Contact "
              onPress={() => {
                props.navigation.navigate('Contact');
              }}
            />
          </Drawer.Section>
        </View>
        <Text style={styles.bottomDrawerSection}>@2020 Codebay,</Text>
        <Text style={{paddingLeft: 70, fontSize: 10}}>
          {' '}
          Mabe by Ethena Technologies
        </Text>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContainer: {
    // flex: 1,
    // backgroundColor: 'gold',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },

  drawerSection: {
    marginTop: 5,
  },
  bottomDrawerSection: {
    //marginBottom: 20,
    //borderTopColor: '#f4f4f4',
    // borderTopWidth: 1
    fontSize: 10,
    paddingTop: 415,
    paddingLeft: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
