import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from 'react-native';

export default class Accordian1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
    if (OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
        </TouchableOpacity>

        <View style={styles.parentHr} />

        {this.state.expanded && (
          <View style={styles.child}>
            <Text>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000',
    fontFamily: 'sans-serif-condensed',
    // fontVariant: 10,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    //height: 100,
    paddingLeft: 15,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  parentHr: {
    height: 3,
    color: '#fff',
    width: '100%',
  },
  child: {
    backgroundColor: '#fff',
    padding: 16,

    //height: 500,
  },
});
