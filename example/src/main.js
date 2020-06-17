import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native';
import Scale from "./Scale";
import Rotate from './Rotate';
import Translate from './Translate';
import Opacity from './Opacity';
import Toggle from './Toggle';

export class main extends Component {
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.child}>
          <Scale />
          <Rotate />
        </View>
        <View style={styles.child}>
          <Translate />
          <Opacity />
        </View>
      <Toggle />
      </SafeAreaView >


    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#000000'

  },
  child: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
