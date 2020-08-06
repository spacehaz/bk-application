import React from 'react'
import BaseInput from '../base-input'
import { View, Text, StyleSheet } from 'react-native'

const Tabs = ({ items = [], ...props }) => (
  <View style={styles.tabsContainer}>
    {items.map(({ title, id }) => <View style={styles.singleTab}>
      <Text style={styles.tabText} key={title}>{title}</Text>
    </View>)}
  </View>
)

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row'
  },
  singleTab: {
    width: 40,
    borderWidth: 1,
    borderColor: 'black',
  },
  tabText: {
    color: 'red',
    textAlign: 'center'
  }
});

export default Tabs