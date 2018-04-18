import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ReviewScreen extends Component {
static navigationOptions = ({ navigation }) => ({
  title: 'Review',
  headerRight: (
    <Button title='Settings' onPress={() => navigation.navigate('settings')} />
  )
});
  render() {
    return (
      <View> 
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      </View>
     );
  }
}
