// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/,
      'js/app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
  browserSync: {
    files: [
      '*'
    ]
  },
  copycat: {
    'webfonts': ['node_modules/@fortawesome/fontawesome-free/webfonts']
  },
};

exports.npm = {
  enabled: true,
  styles: {
    '@fortawesome': ['fontawesome-free/css/all.css'],
    'reset-css': ['reset.css']
  },
  globals: {
    '$': 'jquery',
    'jQuery': 'jquery',
  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['initialize']
  }
};
