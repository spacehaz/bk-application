import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BaseInput = ({ children, label }) => (
  <View style={styles.baseInput}>
    <Text>{label}</Text>
    {children}
  </View>
)

const styles = StyleSheet.create({
  baseInput: {
    paddingVertical: 6,
  }
})

export default BaseInput