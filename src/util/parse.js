/**
 * @Author: Zhengfeng.Yao <yzf>
 * @Date:   2017-05-02 20:01:56
 * @Last modified by:   yzf
 * @Last modified time: 2017-05-02 20:01:58
 */

module.exports = config => ({
  entry: config.entry,
  output: config.output,
  target: config.target,
  devtool: config.devtool,
  resolve: config.resolve,
  cache: config.cache,
  bail: config.bail,
  stats: {
    colors: true,
    reasons: process.env.NODE_ENV === 'development',
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  },
  node: config.node,
  plugins: Object.keys(config.plugins).map(key => config.plugins[key]),
  module: {
    rules: Object.keys(config.module.rules).map(key => config.module.rules[key])
  },
  externals: config.externals,
  devServer: config.devServer
})
