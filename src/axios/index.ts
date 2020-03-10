/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-06 10:49:40
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-06 10:49:49
 * @FilePath: \vue-h5-ts\src\axios\index.ts
 */
module.exports = {
  baseUrl: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.com",
        changeOrigin: true
      },
      "/test": {
        target: "http://test.com",
        changeOrigin: true
      },
      "/res": {
        target: "http://res.com",
        changeOrigin: true
      }
    }
  }
};
