import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { authActions } from '@actions'
import { Button, Input, Tabs } from "@components"


class Main extends Component {
  render () {
    const { items, testSaga } = this.props
    return (
      <View style={styles.container}>
        {items.map(item => <Text style={styles.cellValue}>{item.title}</Text>)}
        <Button
          onPress={_ => testSaga({ variable: 'you suck' })}
          title="Add More"
        />
        <Text style={styles.cellValue}>input here</Text>
        <Input />
        <Tabs items={[
          { title: 'ПН', id: 'monday' },
          { title: 'ВТ', id: 'tuesday' },
          { title: 'СР', id: 'wednesday' },
          { title: 'ЧТ', id: 'thursday' },
          { title: 'ПТ', id: 'friday' }
        ]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

const mapStateToProps = ({ items: { items } }) => ({ items })
const mapDispatchToProps = dispatch => ({
  testSaga: ({ variable }) => dispatch(authActions.testSaga({ variable }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)