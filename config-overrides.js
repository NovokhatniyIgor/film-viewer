const path = require('path');
const { getThemeVariables } = require("antd/dist/theme");
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        src: path.resolve(__dirname, 'src'),
        api: path.resolve(__dirname, 'src/api'),
        modules: path.resolve(__dirname, 'src/modules'),
        services: path.resolve(__dirname, 'src/services'),
        routing: path.resolve(__dirname, 'src/routing'),
        helpers: path.resolve(__dirname, 'src/helpers'),
    }),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                ...getThemeVariables({
                    dark: true,
                }),
            },
        },
    })
);
