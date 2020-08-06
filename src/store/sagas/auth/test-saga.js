import { put, takeEvery } from 'redux-saga/effects'
import { itemsActions } from '@actions'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export default function * testSaga ({ payload }) {
  yield delay(2000)
  const action = itemsActions.addItem({ title: 'Hello', price: '999' })
  console.log({ action, payload })
  yield put(action)
}