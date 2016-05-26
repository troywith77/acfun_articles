import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to='/type'>工作·情感</Link></li>
					</ul>
				</nav>

				{this.props.children}
			</div>
		)
	}
}