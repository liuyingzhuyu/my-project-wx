import Vue from 'vue'
import App from './App'

import $mAssetsConfig from './config/assets.config.js'
Vue.config.productionTip = false

Vue.prototype.$mAssetsConfig = $mAssetsConfig;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
