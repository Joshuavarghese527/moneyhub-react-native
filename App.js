import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator, TabNavigator} from "react-navigation";

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CourseScreen  from './src/screens/CourseScreen'
import SearchScreen  from './src/screens/SearchScreen'

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator ({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator ({
          course: { screen: CourseScreen },
          search: { screen: SearchScreen }
        })
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
