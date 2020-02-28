module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: {
    inline: true
  },
  plugins: [
    require('postcss-import'), 
    require('postcss-mixins'), 
    require('postcss-nested'),
    require('postcss-easings'),
    require('postcss-advanced-variables'), 
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-object-fit-images'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : [])
  ]
}
