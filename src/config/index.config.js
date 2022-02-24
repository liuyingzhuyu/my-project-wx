const CONFIG = {
	//开发环境配置
	development: {
		assetsPath: '/'
	},
	//生产环境配置
	production: {
		assetsPath: '/'
	}
}
export default CONFIG[process.env.NODE_ENV];
