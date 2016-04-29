module.exports = {  
  entry: './ts_build/test/index.js',
  output: {
    filename: './test/app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  }  
};
