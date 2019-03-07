module.exports = {
	devServer : {
		"open": true
	},
	baseUrl:'./',
  productionSourceMap: false,
  configureWebpack: config => {
    // this is not documented very well!

    // drop console logs for production
    if (process.env.NODE_ENV === 'production') {
      if ('uglifyOptions' in config.optimization.minimizer[0].options || {}) {
        console.log('dropping console logs for production.');
        config.optimization.minimizer[0].options.uglifyOptions.compress.drop_console = true;
      }
    }
  }
}