import { takeEvery } from 'redux-saga/effects'
import { TEST_SAGA } from '@actions/auth/action-types'
import testSaga from './test-saga'

export default function * () {
  yield takeEvery(TEST_SAGA, testSaga)
}
