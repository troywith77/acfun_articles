import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Repo from '../components/Repo'
import Detail from '../components/detail'

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='/repo/:userName/:repoName' component={Repo} />
			<Route path='/detail' component={Detail} />
		</Route>
	</Router>
)

export default routes