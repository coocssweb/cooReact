module.exports = {
    production: {
        devtool: false,
        NODE_ENV: 'production',
        jsSourceMap: false,
        cssSourceMap: false,
        eslint: false,
        filenameHash: true,
        fontsFilePath: '/fonts/',
        imagesFilePath: '/images/',
    },
    development: {
        port: 8080,
        devtool: 'source-map',
        NODE_ENV: 'development',
        jsSourceMap: false,
        cssSourceMap: false,
        filenameHash: false,
        fontsFilePath: 'fonts/',
        imagesFilePath: 'images/',
    }
};
