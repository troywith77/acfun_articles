import axios from 'axios'

export const getArticleList = ( channelId, pageNo = 1, sort = 5 ) => {
  return axios({
    method: 'GET',
    url: 'http://api.aixifan.com/searches/channel',
    params: {
      channelIds: channelId,
      pageSize: 20,
      pageNo,
      sort
    },
    headers: {
      deviceType: 1
    }
  })
}
