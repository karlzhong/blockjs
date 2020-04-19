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
        a: 'add',
        b: 'build',
        s: 'serve'
    }
};