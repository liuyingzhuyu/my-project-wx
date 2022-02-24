
export default {
	formatDate(date, fmt = "yyyy-MM-dd") {
		if (date === null || date === undefined) return '';
		date = new Date(date);
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		let o = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds()
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
			}
		}
		return fmt;
	},
	/* 
	 * 将cityNo 转 cityName
	 * cityData:原数据
	 * cityNo：二级地区编码
	 */
	getCityName(cityData, cityNo) {
		if (!cityNo) return;
		if (!(cityData instanceof Array)) return;
		// 9112
		cityNo += "";
		for (let i = 0; i < cityData.length; i++) {
			let sheng = cityData[i];
			for (let j = 0; j < sheng.children.length; j++) {
				let shi = sheng.children[j];
				if (shi.value == cityNo) {
					// 使用return 终止循环
					return `${sheng.label}-${shi.label}`;
				}
			}
		}
	},

	/* 
	 * obj 转 params字符串参数  
	 * 例子：{a:1,b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = "";
		if (obj instanceof Array) return paramsStr;
		if (!(obj instanceof Object)) return paramsStr;
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`;
		}
		return paramsStr.substring(0, paramsStr.length - 1);
	},

	/* 
	 * obj 转 路由地址带参数
	 * 例子：{a:1,b:2} => /pages/index/index?a=1&b=2
	 */
	objParseUrlAndParam(path, obj) {
		let url = path || "/";
		let paramsStr = "";
		if (obj instanceof Array) return url;
		if (!(obj instanceof Object)) return url;
		paramsStr = this.objParseParam(obj);
		paramsStr && (url += "?");
		url += paramsStr;
		return url;
	},

	/* 
	 * 获取url字符串参数
	 */
	getRequestParameters(locationhref) {
		let href = locationhref || "";
		let theRequest = new Object();
		let str = href.split("?")[1];
		if (str != undefined) {
			let strs = str.split("&");
			for (let i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return theRequest;
	},

	/* 
	 * 银行卡每四位空格
	 */
	formatCardNo(cardNo) {
		cardNo += "";
		return cardNo.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
	},

	/**
	 * 乘法，解决js精度损失问题
	 * @param {*} arg1 
	 * @param {*} arg2 
	 */
	accMul(arg1, arg2) {
		arg1 = arg1 || 0;
		var m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length
		} catch (e) {}
		try {
			m += s2.split(".")[1].length
		} catch (e) {}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
	},
	/**
	 * 数字取整
	 * ＜1000取整，>1000保留一位小数
	 * @param {*} arg1 
	 * @param {*} arg2 
	 * */
	 numberTrunk(number){
		 let nub=Number
		 if(number<1 && number>=0 ){
			 nub = Math.floor(number*1000)+'米';
		 }else if(number>=1){
			 nub = number.toFixed(2)+'㎞';
		 }else{
			 nub = '--'
		 }
		 return nub
	 },
	 //获取页面路由以及参数
	 getRouterParams(){
	 	const pages = getCurrentPages()
	 	let currentPage = pages[pages.length-1]
	 	let currentRouter = {
	 		route:currentPage.route,
	 		params:currentPage.options
	 	}
	 	return currentRouter
	 },
	 //消息订阅
	 messageSubscription(tmplIds, payload){
		 if(!tmplIds) return;
		 if(wx.requestSubscribeMessage){
			 wx.requestSubscribeMessage({
				 tmplIds,// 模板id的数组
				 success(res){
					console.log("消息订阅success:", res);
				 },
				 fail(res){
					console.log("消息订阅fail:", res);
				 },
				 complete(res){
					 payload && payload.callback();
				 }
			 })
		 }else {
			// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
			wx.showModal({
				title: '提示',
				content: '当前微信版本过低，无法使用消息提醒功能，请升级到最新微信版本后重试。',
				showCancel: false,
				success (res) {
					if (res.confirm) {
						payload && payload.callback()
						console.log('用户点击确定')
					} else if (res.cancel) {
						console.log('用户点击取消')
					}
				}
			})
		}
	 },
	 //打开微信导航,显示当前门店位置
	 navigation(option){
	 	uni.openLocation({
	 	    latitude: option.latitude,
	 	    longitude: option.longitude,
	 			name:option.name||null,
	 			address:option.detailAddress ||option.address||null,
				scale:option.scale||null,
	 	    success: function () {
					console.log('打开地图success');
	 	    },
				fail:function(){
					console.log('打开地图fail');
				}
	 	});
	 },
}
