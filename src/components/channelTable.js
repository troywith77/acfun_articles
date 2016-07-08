import React, { Component } from 'react'
import { Table, Tooltip, Modal, Button, Spin } from 'antd'
import { Link } from 'react-router'
import { getArticleList } from '../config/api'

class channelTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      dataSource: null,
      totalCount: null,
      pagination: {
        pageSize: 20
      }
    }
    this.handleChangePagination = this.handleChangePagination.bind(this)
  }
  handleChangePagination(pagination) {
    console.log(pagination)
    this.fetchData(this.props.params.id, pagination.current)
  }
  fetchData(id, pageNo, sort) {
    this.setState({ loading: true })
    getArticleList(id, pageNo, sort).then(result => {
      const data = result.data.data
      console.log(data)
      this.setState({
        loading: false,
        dataSource: data.list,
        pagination: Object.assign({}, {
          total: data.totalCount
        })
      })
    })
  }
  componentWillMount() {
    this.fetchData(this.props.params.id)
  }
  componentWillReceiveProps(nextProp) {
    this.fetchData(nextProp.params.id)
  }
  render() {
    const columns = [{
      title: 'UP 主',
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
      render(text, record) {
        return (
          <Link to={`/detail/${record.contentId}`} target="_blank">
            {text}
          </Link>
        )
      }
    }, {
      title: '简介',
      dataIndex: 'description',
      index: 'description',
      render(text,record) {
        return (
          <Tooltip title={record.description}>
            {
              text.length > 38 ?
                <span>{text.slice(0, 38)}...</span>
                :
                <span>{text}</span>
            }
          </Tooltip>
        )
      }
    }, {
      title: '评论数',
      dataIndex: 'comments',
      index: 'comments',
    }, {
      title: 'Views',
      dataIndex: 'views',
      index: 'views'
    }]

    return (
      <Spin spinning={this.state.loading}>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          rowKey={record => record.contentId}
          pagination={this.state.pagination}
          onChange={this.handleChangePagination}
        />
      </Spin>
    )
  }
}


export default channelTable
