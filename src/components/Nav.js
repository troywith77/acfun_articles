import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link to='/type' />work</li>
				</ul>

				{this.props.children}
			</nav>
		)
	}
}