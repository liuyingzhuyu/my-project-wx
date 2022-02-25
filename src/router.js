import Vue from 'vue'
import store from './store'

import {RouterMount,createRouter} from 'uni-simple-router';
import pages from './pages.js'

const myRouter =
	pages().pages.map(item => ({
		path: `/${item.path}`,
		meta: item.meta || {}
	}))
//初始化
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: myRouter
});


//全局路由前置守卫
router.beforeEach((to, from, next) => {
	// const isLogin = store.getters.isLogin
	// if (!isLogin && to.meta.needLogin) {
	// 	next({
	// 		path: '/pages/login/index',
	// 		query: {
	// 			redirect: to.path
	// 		}
	// 	})
	// } else {
		next()
	// }

})
// 全局路由后置守卫
router.afterEach((to, from) => {})
export {
	router,
	RouterMount
}