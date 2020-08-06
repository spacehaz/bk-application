import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
import sagas from './sagas'

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

export default store