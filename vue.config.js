module.exports = {
  baseUrl: '/',
  // productionSourceMap: false,
  filenameHashing: process.env.NODE_ENV !== 'development',
  devServer: {
    proxy: {
      '/teacher': {
        target: 'http://rap2api.taobao.org/app/mock/5248/'
      }
    },
    disableHostCheck: true
  },
  css: {
    modules: false,
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  pwa: {
    name: 'Seeding the future',
    workboxOptions: {
      importWorkboxFrom: 'local',
      exclude: [
        /\.html$/
      ]
    }
  }
}