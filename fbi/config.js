module.exports = {
    template: 'blockjs',
    templateDescription: 'blockjs template',
    server: {
        root: 'dst/',
        host: 'localhost',
        port: 8888
    },
    npm: {
        alias: 'tnpm',
        options: ''
    },
    alias: {
        b: 'build',
        s: 'serve'
    }
};