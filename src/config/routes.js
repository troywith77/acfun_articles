import React from 'react'
import { Router, Route, IndexRedirect , browserHistory, Redirect } from 'react-router'
import Nav from '../components/Nav'
import Detail from '../components/Detail'
import channelTable from '../components/channelTable'

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Nav}>
			<IndexRedirect to="/type/110" />
			<Route path='/type/:channelId' component={channelTable} />
		</Route>
		<Route path='/detail/:articleId' component={Detail} />
	</Router>
)

export default routes
