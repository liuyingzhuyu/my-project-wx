import $mRouter from './router'
import $mUtils from './utils'
import store from '../store/index.js'
import $mRoutesConfig from '../config/routes.config.js'

export default function(){
	$mRouter.beforeEach((navType, to) => {
		if (to.route === undefined) throw ("路由钩子函数中没有找到to.route对象，路由信息:" + JSON.stringify(to));
		// 切换到login页面，不走该拦截，以免重复跳转登录页
		if (to.route.path === $mRoutesConfig.login.path && store.state.user.hasLogin){
			return
		}
		
		// 过滤需要权限的页面
		if (to.route.requiresAuth) {
			if (store.state.user.hasLogin) {
				// 已经登录
				uni[navType]({
					url: $mUtils.objParseUrlAndParam(to.route.path, to.query)
				})
			} else {
				uni.showModal({
					mask: false,
					title: '提示',
					content: '您没有登录，请登录',
					success(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/login/login'
							})
						} 
					}
				})
				/* let query = {
					redirectUrl: to.route.path,
					...to.query
				} */
				// 没有登录 是否强制登录?
				// if (store.state.forcedLogin) {
				// 	uni.redirectTo({
				// 		url: $mUtils.objParseUrlAndParam($mRoutesConfig.login.path, query)
				// 	})
				// } else {
				// 	uni.navigateTo({
				// 		url: $mUtils.objParseUrlAndParam($mRoutesConfig.login.path, query)
				// 	})
				// }
			}
		} else {
			uni[navType]({
				url: $mUtils.objParseUrlAndParam(to.route.path, to.query)
			})
		}
	})

}