export const formatDate = ( time ) => {
  const dayForm = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  }
  const date = new Date(time);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = dayForm[date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  const result = `${month}月${day}日(星期${weekday}) ${hour}时${minute}分`
  return result
};
