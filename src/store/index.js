import { createStore } from 'redux'
import { work } from '../reducers/index'

let store = createStore(work)

export default store