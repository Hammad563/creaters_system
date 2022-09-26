const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        white: colors.white,
      }
    }
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
  ]
}
