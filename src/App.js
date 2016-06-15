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
  	const typeId = this.props.params.id
  	this.fetchData('http://api.aixifan.com/searches/channel?channelIds='+typeId+'&pageNo=1&pageSize=20&sort=5')
  }
  componentWillReceiveProps(nextProp) {
  	console.log(nextProp)
  	const typeId = nextProp.params.id
  	this.fetchData('http://api.aixifan.com/searches/channel?channelIds='+typeId+'&pageNo=1&pageSize=20&sort=5')
  }
  fetchData(url) {
  	axios({
			method: 'GET',
			url: url,
			headers: {
				deviceType: 1
			}
		})
		.then(data => {
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
