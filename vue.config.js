module.exports = {
  chainWebpack: config => {
    // убираем массу
    // eslint warnings
    config.plugins.delete('friendly-errors')
  }
}
