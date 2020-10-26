const path = require('path')

module.exports = {
  pathPrefix: `src/components`,
  siteMetadata: {
    title: 'Elektryk Brzeg',
    description: 'Kompleksowe instalacje elektryczne',
    url: 'https://elektrykbrzeg.pl',
    image: '/src/images/aboutUs/AboutImg2.jpg',
    author: 'Kamil Sawicki',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for SASS
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,500,700`],
        display: 'swap',
      },
    },

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/121675552_1727249410767396_8093870860839572251_n.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: true,
      },
    },

    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        icons: path.join(__dirname, 'src/icons'),
      },
    },
  ],
}
