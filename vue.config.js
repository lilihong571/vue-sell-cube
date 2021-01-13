// const { resolve } = require('core-js/fn/promise');
const appData = require('./data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;
// 起别名
// const path = require('path');
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function(req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods', function(req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function(req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('api', resolve('src/api'))
  }
};
