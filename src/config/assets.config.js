// import indexConfig from "./index.config.js"

// const PATH = indexConfig.assetsPath + "/images";

// const BRAND = "/"+indexConfig.brand;

// const version = '?version='+indexConfig.copyrightTxt

// const tmp = new Date().getTime()

/* 
 * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
 * 页面使用：this.$mAssetsPath.grid_1
 * CSS背景：应尽量使用:style="" 行内样式设置背景图
 * PATH说明：本地路径或者服务器路径
 * 
 * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
 * 
 * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
 */

export default {
	
	/***********专属品牌图片路径***************** */
	
	//登陆背景图
	// loginBg: PATH + BRAND + "/login-bg.jpg" + version,
    loginBg: 'https://moby-oss-dev.oss-cn-beijing.aliyuncs.com/file//2e75e515-d203-4ca0-9b92-701a98729f78.png',
	
	/***********公共图片路径***************** */
	//预约时间
	// appoinTim: PATH + "/appoinTime.png" + version,

}
