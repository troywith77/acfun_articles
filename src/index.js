import React from 'react'
import { render } from 'react-dom'
// import store from './store/index'
import Root from './containers/Root'
import 'antd/dist/antd.min.css'
import styles from './index.scss'

render(
	<Root />,
	document.querySelector('#root')
)
