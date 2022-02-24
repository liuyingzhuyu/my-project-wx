module.exports = {
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