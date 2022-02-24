import Vue from 'vue'
import App from './App'
import $mRouter from './common/router.js'
import $mRoutesConfig from './config/routes.config.js'
import auth from "./common/auth.js"
import $mAssetsConfig from './config/assets.config.js'
Vue.use(auth)
Vue.config.productionTip = false
Vue.prototype.$mRouter = $mRouter;
Vue.prototype.$mRoutesConfig = $mRoutesConfig;
Vue.prototype.$mAssetsConfig = $mAssetsConfig;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
