module.exports = {
    siteMetadata: {
        name: `Dylan Justice Resume`,
        tagline: `Gatsby + SASS + Typescript = 💪`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-tslint`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [],
            },
        },
    ],
};
