import { ADD_ITEM } from '@actions/items/action-types'

const initialState = {
  items: [{ title: 'Food', price: '69.99' }]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, { title: payload.title, price: payload.price }] }
  }
  return state
};

export default reducer