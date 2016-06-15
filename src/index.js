import React from 'react'
import { render } from 'react-dom'
import store from './store/index'
// import Root from './App'
import Root from './containers/Root'
import 'antd/dist/antd.min.css'

render(
	<Root
		store={store}
	/>,
	document.querySelector('#root')
)