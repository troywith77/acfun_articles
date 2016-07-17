import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon, Row, Col } from 'antd'
import styles from './Nav.scss'

const types = [
	{ title: '综合', key: 'inte', id: 110 },
	{ title: '工作 · 情感', key: 'work', id: 73 },
	{ title: '动漫文化', key: 'animation', id: 74 },
	{ title: '漫画 · 轻小说', key: 'fiction', id: 75 },
	{ title: '游戏', key: 'game', id: 164 },
]

export default class Nav extends Component {
	constructor(props) {
		super(props)
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
			<div className={styles.container}>
						<Menu mode='horizontal' defaultSelectedKeys={['inte']}>
							{items}
			      </Menu>
				{this.props.children}

				<footer className={styles.footer}>
					AcFun弹幕视频网 - 认真你就输啦 (・ω・)ノ- ( ゜- ゜)つロ
				</footer>
			</div>
		)
	}
}
