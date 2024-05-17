// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

//自定义配置
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
	return path.join(__dirname, dir)
}

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	// css: {
	// 	loaderOptions: {
	// 		sass: {
	// 			prependData: `
    //       @import "@/assets/sass/reset.scss";
    //     `
	// 		}
	// 	}
	// },
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@as', resolve('src/assets'))
			.set('@cp', resolve('src/components'))
			.set('@service', resolve('src/service'))
			.set('@static', resolve('src/static'))
			.set('@views', resolve('src/views'))

		// config.module.rule('eslint')
		// config.module.rule('eslint').use('eslint-loader')
		config.module.rules.delete('eslint');

		config.module
			.rule('svg')
			.exclude.add(resolve('src/icons'))
			.end();

		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: '[name]'
			});
	},
	configureWebpack: config => {
		if (process.argv.includes('build')) {
			if (process.env.NODE_ENV === 'production') {
				config.output.filename = 'static/js/[name].[contenthash:8].js'
				config.output.chunkFilename = 'static/js/[name].[contenthash:8].js'
			} else {
				config.output.filename = 'static/js/[name].[hash].js'
				config.output.chunkFilename = 'static/js/[name].[hash].js'
			}
		}
		if (process.env.NODE_ENV === 'production') {
			config.plugins.push(
				new CompressionWebpackPlugin({
					filename: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
					threshold: 10240,
					minRatio: 0.8,
					deleteOriginalAssets: false
				})
			)
		}
	},
	
	devServer: {
		// host,
		open: true,
		// port,
		// headers: {
		// 	'Access-Control-Allow-Origin': '*'
		// },
		// proxy: {
		// 	'/': {
		// 		target: 'http://111.231.223.135:8080/hnt/',
		// 		pathRewrite: {
		// 		}
		// 	}
		// },
	}
}