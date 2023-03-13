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
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                    options: {
                        name: "SvgAsset",
                    },
                },
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "G-MGQSR5WG4S",
                includeInDevelopment: false,
                defaultDataLayer: {
                    platform: "gatsby",
                },
                enableWebVitalsTracking: true,
            },
        },
    ],
};
