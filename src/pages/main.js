import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { itemsActions } from '../actions'
console.log(itemsActions)

class Main extends Component {
  render () {
    const { items, addItem } = this.props
    return (
      <View style={styles.container}>
        {items.map(item => <Text style={styles.cellValue}>{item.title}</Text>)}
        <Button
          onPress={_ => addItem({ title: 'you suck', price: '66.99' })}
          title="Add More"
        />
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
  addItem: ({ title, price }) => dispatch(itemsActions.addItem({ title, price }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)