// axios
import axios from 'axios'
import store from './store/store'

const domain = ""

export default axios.create({
  domain
  // You can add your headers here
})

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

if (store.state.token) {
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token;
}
