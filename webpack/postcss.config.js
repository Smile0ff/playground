const plugins = {
  'postcss-easy-import': {
    extensions: '.scss',
    path: 'src'
  },
  'autoprefixer': {
    browsers: [
      'last 2 versions',
      'ie >= 10',
      '>= 5%'
    ]
  }
}

module.exports = { plugins }
