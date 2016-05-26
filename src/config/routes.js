import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from '../App'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Detail from '../components/detail'

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Nav}>
			<IndexRoute component={App} />
		</Route>
		<Route path='/detail/:id' component={Detail} />
	</Router>
)

export default routes