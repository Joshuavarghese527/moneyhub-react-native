import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides  from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to MoneyHub', color: '#D3D3D3'},
  { text: 'Empowering Communities through fina literacy'},
  { text: 'Learn how to manage your money'}
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides 
         data={SLIDE_DATA}
         onComplete={this.onSlidesComplete} />
     );
  }
}
