import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}
  componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://api.aixifan.com/searches/channel?channelIds=110&pageNo=1&pageSize=20&sort=2',
			//综合110，游戏164，动漫文化74，漫画小说75
			//sort： 5最新回复， 2评论最多， 4最新发布， 1围观最多

			headers: {
				deviceType: 1,
				// productID: 2000
			}
		})
		.then(data => {
			console.log(data.data.data)
			this.setState({
				list: data.data.data.list
			})
		})
  }
  render() {
  	const list = this.state.list.map((item, id) => {
  		return (
  			<li key={id}>
  				<Link to={'/detail/'+item.contentId}>{item.title}</Link>
  			</li>
  		)
  	})
    return (
    	<div>
			{list}

	      	{this.props.children}
    	</div>
    );
  }
}
