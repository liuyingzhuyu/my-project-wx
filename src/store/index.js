import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const modules = {}
const files = require.context('.', false, /\.js$/)
files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
const store = new Vuex.Store({
  modules
})
export default store