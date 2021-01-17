const axios = require('axios')
const SCKEY = 'SCU151242T51ffdf46ee5fec953180ace4792c09e860031a280dba5'
axios.post(`https://sc.ftqq.com/${SCKEY}.send`, {
  text: '价格发生了变化哦！',
  desp: "111"
}).then(result => {
  console.log(result.data);
})

