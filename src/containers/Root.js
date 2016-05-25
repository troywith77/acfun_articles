import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import routes from '../config/routes'

const Root  = ({
	store
}) => {
	return (
		<div>
			{routes}
		</div>
	)
}

export default Root