const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(png|jpe?g|gif|svg°|PNG|jpg)(\?.*)?$/)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .tap(options => {
  //       return {
  //         ...options,
  //         name: '[name].[hash].[ext]', // Ajusta el formato del nombre de archivo si es necesario
  //         outputPath: 'images' // Carpeta de salida para las imágenes
  //       };
  //     });
  // }
})
