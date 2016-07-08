import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'
import styles from './detail.scss'

//评论 http://mobile.acfun.tv/comment/content/list?version=4&contentId=2572788&pageSize=50&pageNo=1

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      title: null
    }
  }
  getArticle() {
    axios({
      method: 'get',
      url: 'http://api.aixifan.com/articles/' + this.props.params.id,
      headers: {
        deviceType: 1
      }
    })
    .then(data => {
      console.log(data)
      const item = data.data.data
      this.setState({
        content: item.article.content,
        title: item.title
      })
    })
  }
  componentDidMount() {
    this.getArticle()
  }
  render() {
    const { title, content } = this.state
    return(
      <div>
        <Row>
          <Col span={12} push={6}>
            <h1>{title}</h1>
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
      </div>
    )
  }
}
