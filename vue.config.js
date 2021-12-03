module.exports = {
    devServer: {
        proxy: {
            '/REST/api': {
                target: 'http://localhost:9090',
                changeOrigin: true,
                logLevel: 'debug'
            }
        }
    }
}