import React from 'react';
import Welcome from './components/Welcome'
import welcomeStyles from './assets/css/welcome'
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={welcomeStyles.container}>
        <Text style={welcomeStyles.headerText}>Hai der</Text>
        <Welcome />
      </View>
    );
  }
}
