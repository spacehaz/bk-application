import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation';
import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
