import React from 'react';
import { sanFranciscoWeights } from 'react-native-typography'
import { StyleSheet, Text, View } from 'react-native';
import { text } from "./src/style/text";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[sanFranciscoWeights.black, text.title1]}>Open up App.js to start working on your app!</Text>
        <Text style={sanFranciscoWeights.medium}>Changes you make will automatically reload.</Text>
        <Text style={sanFranciscoWeights.regular}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
