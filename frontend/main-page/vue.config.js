module.exports = {
    /*
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/styles/_variables.scss";
                @import "@/styles/_mixins.scss";
                `
            }
        }
    },
    */
    devServer: {
        proxy: {
            '/': {
                //target: 'http://localhost:12345/'
                target: '182.172.226.12:3000/'
            }
        }
    }
}