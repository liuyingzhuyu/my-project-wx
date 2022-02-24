
import $mRoutesConfig from '@/config/routes.config.js'
import $mRouter from '@/common/router.js'
// import {wxlogin, findMemberByToken} from '@/apis/login.js'
const TOKEN = uni.getStorageSync("token") || "";
const USER_INFO = uni.getStorageSync("userInfo") || {};
export default {
	namespaced: true,
	state: {
		// token
		token: TOKEN,
		// 用户信息 头像 昵称...
		userInfo: USER_INFO,
		// 用户是否登录变量
		hasLogin: false  
	},
	getters: {
		// 用户是否登录变量
	/* 	hasLogin: state => {
			if (state.userInfo && state.userInfo.mobile) {
				return true;
			} else {
				return false
			}
		} */
		
	},
	mutations: {
		// 是否跳转登录页
		isRegisterOrLogin(state) {
			if(!state.hasLogin){
				uni.showModal({
					mask: false,
					title: '提示',
					content: '您没有登录，请登录',
		
					success(res) {
						if (res.confirm) {
							$mRouter.push({
								route: $mRoutesConfig.login
							});
						} 
					}
				})
				return false
			}
		},
		SET_TOKEN(state, token) {
			// state.token = token;
			// uni.setStorageSync("token", token);
		},
		SET_USERINFO(state, paramUserInfo) {
			// Object.keys(paramUserInfo).forEach((key, index) =>{
			// 	state.userInfo[key] = paramUserInfo[key]
			// })
			// state.hasLogin = paramUserInfo.mobile ? true :false;
			// uni.setStorageSync("userInfo", paramUserInfo);
		},
		SET_LOGOUT(state) {
			// state.token = null;
			// state.userInfo = {}
			// uni.setStorageSync("token", null);
			// uni.removeStorageSync('userInfo')
		}
	},
	actions: {
		// 根据code获取token
		getToken(context) {
			//if (TOKEN != "") return
			// return new Promise((resolve, reject) => {
			// 	uni.login({
			// 		provider: 'weixin',
			// 		success(res) {
						// 调用接口将code传递给后台，后台调用微信服务器返回openId,token等关联数据
						// wxlogin({
						// 	code: res.code
						// }).then(res =>{
						// 	if(!res){
						// 		// errrFun('微信登录异常：wxlogin')
						// 		return
						// 	}
						// 	context.commit('SET_TOKEN', res.token || "")   // 存储token	,后台报错存储“”						
						// 	let userInfo = {
						// 		openId: res.openid,
						// 		unionId: res.unionId,
						// 		userId: res.userId,
						// 		tenantCode: res.tenantCode,
						// 	}
						// 	resolve(res);
						// 	context.commit('SET_USERINFO', userInfo)   // 存储用户基本信息q
						// 	context.dispatch('getUserInfo')  // 获取用户信息
						// }).catch(e=>{
						// 	reject(e)
						// })
			// 		}
			// 	})
			// })
		},
		// 获取用户信息
		getUserInfo(context) {
			// return new Promise((resolve, reject) => {
			// 	findMemberByToken().then(res =>{
			// 		if(res){
			// 			let users = {...context.state.userInfo,...res};
			// 			context.commit('SET_USERINFO', users);   
			// 			 uni.$emit('userUpdate',{msg:'初始化完成',ready:true})
			// 			resolve(res);
			// 		}
			// 	}).catch(err =>{
			// 		reject(err)
			// 	})
			// })
		},
		// 登录过期 重新登录
		reLogin({commit}, info) {
			// commit("SET_LOGOUT", "");
			// $mRouter.redirectTo({
			// 	route: $mRoutesConfig.login
			// });
		},
		logout ({commit}) {
			// uni.showModal({
			// 	title: '',
			// 	content: '确认退出登录吗?',
			// 	success: res => {
			// 		if (res.confirm) {
			// 			commit("SET_LOGOUT",'');
			// 			$mRouter.redirectTo({
			// 				route: $mRoutesConfig.index
			// 			});
			// 		}
			// 	}
			// })
		}
	},
}

