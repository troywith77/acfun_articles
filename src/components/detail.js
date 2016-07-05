import React, { Component } from 'react'
import axios from 'axios'

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
      console.log(data.data.data)
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
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{__html: content}}></p>
      </div>
    )
  }
}
