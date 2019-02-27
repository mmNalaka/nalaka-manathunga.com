module.exports = {
  siteMetadata: {
    title: `Nalaka Manathunga Gatsby portfolio`,
    description: `This is simple gatsby website of Nalaka Manathunga`,
    author: `Nalaka Manathunga`,
    url: `https://github.com/mmNalaka`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nalaka Manathunga - Full stack webdeveloper and UI designer`,
        short_name: `nalaka-manathunga`,
        start_url: `/`,
        background_color: `#FDFDFD`,
        theme_color: `#35477d`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
