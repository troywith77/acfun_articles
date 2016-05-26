import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: '',
			title: '',
			list: []
		}
	}
  componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://api.aixifan.com/searches/channel?channelIds=73&pageNo=1&pageSize=20&sort=5',
			headers: {
				deviceType: 1,
				productID: 2000
			}
		})
		.then(data => {
			console.log(data.data.data.list)
			this.setState({
				list: data.data.data.list
			})
		})
  }
  getArticle(id) {
  	axios({
			method: 'get',
			url: 'http://api.aixifan.com/articles/' + id,
			headers: {
				deviceType: 1
			}
		})
		.then(data => {
			console.log(data.data.data)
			const item = data.data.data
			this.setState({
				content: item.article.content,
				title: item.title
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
    		<ul>
    			{list}
    		</ul>

      	{this.props.children}
      </div>
    );
  }
}
