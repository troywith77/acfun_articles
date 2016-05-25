import React from 'react'
import { Link } from 'react-router'

const Main = ({
	children
}) => {
	return (
		<div>
			<ul>
				<li><Link to='/repo/Troy/react' activeStyle={{color: 'red'}}>repo</Link></li>
				<li><Link to='/detail' activeStyle={{color: 'red'}}>detail</Link></li>
			</ul>

			{children}
		</div>
	)
}

export default Main