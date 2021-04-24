module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    process.env.NODE_ENV === 'production'
      ? [
        '@fullhuman/postcss-purgecss',
        {
          content: [
            './pages/**/*.js',
            './components/**/*.js',
          ],
          defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
        },
      ]
      : undefined,
  ],
};
