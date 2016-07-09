import React, { Component } from 'react'
import { Row, Col, Spin } from 'antd'
import { getArticleDetails } from '../../config/api'
import styles from './detail.scss'

//评论 http://mobile.acfun.tv/comment/content/list?version=4&contentId=2572788&pageSize=50&pageNo=1

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      title: null,
      loading: true
    }
  }
  getArticle() {
    getArticleDetails(this.props.params.articleId)
    .then(data => {
      const item = data.data.data
      this.setState({
        content: item.article.content,
        title: item.title,
        loading: false
      })
    })
  }
  componentDidMount() {
    this.getArticle()
  }
  render() {
    const { title, content } = this.state
    return(
      <Spin spinning={this.state.loading}>
        <Row>
          <Col span={12} push={6}>
            <h1 className={styles.title}>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col span={12} push={6}>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{__html: content}}>
            </div>
          </Col>
        </Row>
      </Spin>
    )
  }
}
