import Vue from 'vue'
import store from './store'

import {RouterMount,createRouter} from 'uni-simple-router';
import pages from './pages.js'

let pageJson = pages()
const myRouter = []
if(pageJson.pages && pageJson.pages.length){
    pageJson.pages.map(item => {
            myRouter.push(    {
            path: `/${item.path}`,
            meta: item.meta || {}
        })
    })
}


const subRouter = []
if(pageJson.subPackages && pageJson.subPackages.length){
    pageJson.subPackages.map(item => {
        item.pages.map(every=>{
            subRouter.push({
                path: `/${item.root}/${every.path}`,
                meta: item.meta || {}
            })
        })
    })
}
console.log(subRouter)
//初始化
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...myRouter,...subRouter]
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