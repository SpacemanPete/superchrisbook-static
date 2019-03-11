
'use strict'

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-nodes');