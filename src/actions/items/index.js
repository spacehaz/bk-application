import { ADD_ITEM } from './action-types'

const addItem = ({ title, price }) => ({
  type: ADD_ITEM,
  payload: {
    title,
    price
  }
})


export default {
  addItem
}