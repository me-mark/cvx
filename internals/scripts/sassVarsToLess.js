module.exports = {
  install: function (source) {
    return source.replace(/\$/ig, '@');
  }
};