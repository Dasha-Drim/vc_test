const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		publicPath: '',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test:/\.(s*)css$/,
			use: [
			miniCss.loader,
			'css-loader',
			'sass-loader',
			]
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: 'file-loader',
        }],
    },
    plugins: [
    new miniCss({
    	filename: 'style.css',
    }),
    ]
};