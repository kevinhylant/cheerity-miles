import React, { PureComponent } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import styles from './__styles__/app.styles';

export default class CheerityMiles extends PureComponent {
  constructor() {
    super();
    this.state = {
      welcomeText: 'Welcome to Cheerity Miles!!',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.welcomeText}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('CheerityMiles', () => CheerityMiles);
