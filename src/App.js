import React, { Component } from 'react';
import { Table, Tooltip, Modal } from 'antd'
import axios from 'axios'
import { Link } from 'react-router'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSource: [],
      visible: false
		}
    this.renderTitle = this.renderTitle.bind(this)
    this.renderArticle = this.renderArticle.bind(this)
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
				dataSource: data.data.data.list
			})
		})
  }
  renderArticle() {
    this.setState({ visible: true })
  }
  renderTitle(text, record) {
    return(
      <a
        onClick={this.renderArticle} 
        /*to={'/detail/'+record.contentId}*/
      >
        {record.title}
      </a>
    )
  }
  render() {
    const columns = [{
      title: '用户',
      dataIndex:　'user',
      index: 'user',
      render(item) {
        return (
          <span>{item.username}</span>
        )
      }
    }, {
      title: '标题',
      dataIndex:　'title',
      index: 'title',
      render: this.renderTitle
    }, {
      title: '简介',
      dataIndex: 'description',
      index: 'description',
      render(text,record) {
        return (
          <Tooltip title={record.description}>
            <span>{text.slice(0,20)}</span>
          </Tooltip>
        )
      }
    }, {
      title: '标签',
      dataIndex: 'tags',
      index: 'tags',
      render(text, record) {
        let tags = text.map(item => {
          return item
        })
        return (
          <span>{tags.join(', ')}</span>
        )
      }
    },{
      title: '评论数',
      dataIndex: 'comments',
      index: 'comments',
    }]
    console.log(this.state.dataSource)
    return (
    	<div>
			  <Table 
          dataSource={this.state.dataSource} 
          columns={columns} 
          pagination
        />
        <Modal 
          title="第一个 Modal" 
          visible={this.state.visible}
          footer={[
            <Button key="submit" type="primary" size="large" onClick={e => this.setState({ visible: false })}>
              關 閉
            </Button>,
          ]}
        >
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>
    	</div>
    );
  }
}
