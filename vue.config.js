const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()


module.exports = {
  configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
            // cli:true,      //当前是否为脚手架初始化的项目
						includes: ['path', 'name', 'aliasPath']//需要获取包涵的字段
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	},
  lintOnSave: false,
  devServer: {
    port: 9000,
    hot: true,
    clientLogLevel: 'warning',
    overlay: {
      warnings: true,
      errors: true
    }
  }
}