import React from 'react'
import BaseInput from '../base-input'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Tabs = ({ items = [], active = 1, onChange, ...props }) => (
  <View style={styles.tabsContainer}>
    {items.map(({ title, id }) => <View style={
        [styles.singleTab, id === active ? styles.singleTabActive : styles.singleTabInactive]
      } key={id}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={_ => {
          if (id === active) { return }
          onChange && onChange({ id })
        }}
      >
        <Text style={
          [styles.tabText, id === active ? styles.tabTextActive : styles.tabTextInactive]
        } key={title}>{title}</Text>
      </TouchableOpacity>
    </View>)}
  </View>
)

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
  },
  singleTab: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'red',
  },
  singleTabActive: {
    backgroundColor: 'red',
    color: 'white'
  },
  singleTabInactive: {
    backgroundColor: 'transparent'
  },
  tabText: {
    textAlign: 'center'
  },
  tabTextActive: {
    color: 'white'
  },
  tabTextInactive: {
    color: 'red'
  }
});

export default Tabs