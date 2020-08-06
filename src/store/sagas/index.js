import { all, fork } from "redux-saga/effects"
import auth from "./auth"

export default function * () {
  yield all([
    fork(auth)
  ])
}