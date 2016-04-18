import React from 'react'
import { render } from 'react-dom'
import store from './store/index'
import Root from './containers/Root'

render(
	<Root
	store={store} />,
	document.querySelector('#root')
)