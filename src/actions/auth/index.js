import { TEST_SAGA } from './action-types'

const testSaga = ({ variable }) => ({
  type: TEST_SAGA,
  payload: {
    variable
  }
})


export default {
  testSaga
}