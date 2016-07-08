import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';

const types = [
	{ title: '综合', key: 'inte', id: 110 },
	{ title: '工作·情感', key: 'work', id: 73 },
	// { title: '游戏', key: 'game', id: 164 },
	{ title: '动漫文化', key: 'animation', id: 74 },
	{ title: '漫画小说', key: 'fiction', id: 75 }
]

export default class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: "inte"
		}
	}
	render() {
		const items = types.map(item => {
			return (
				<Menu.Item key={item.key}>
    	  	<Link to={`/type/${item.id}`}>{item.title}</Link>
    		</Menu.Item>
			)
    })
		return (
			<div>
				<Menu mode="horizontal" defaultSelectedKeys={["inte"]}>
					{items}
	      </Menu>

				{this.props.children}
			</div>
		)
	}
}
