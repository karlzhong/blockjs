const rollup = require('rollup')
const glob = require('glob')
const UglifyJS = require("uglify-js")
const fs = require('fs')


const buble = require('buble')
const rollupPluginutils = require('rollup-pluginutils')

const entry = 'src/index.js'
const distFile = 'blockjsShare.js'
const distFileMin = 'blockjsShare.min.js'


function bublePlug(opts) {
    if (!opts) opts = {}
    var filter = rollupPluginutils.createFilter(opts.include, opts.exclude)

    if (!opts.transforms) opts.transforms = {}
    opts.transforms.modules = false

    return {
        name: 'buble',
        transform: function (code, id) {
            if (!filter(id)) return null
            const ret = buble.transform(code, opts)
            return ret
        }
    }

}

rollup.rollup({
    entry: entry,
    plugins: [
        bublePlug({
            include: '**/*.js',
            transforms: {
                arrow: true,
                classes: true,
                defaultParameter: true,
                destructuring: true,
                forOf: true,
                generator: true,
                letConst: true,
                parameterDestructuring: true,
                spreadRest: true,
                templateString: true
            }
        })
    ]

}).then(bundle => {
    // Generate bundle + sourcemap
    // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
    // 生成转义文件有两种方式，一种是fs生成
    /*const result = bundle.generate({
        format: 'cjs'
    });

    fs.writeFileSync(distFile, result.code);*/

    // 另一种是rollup本身api的生成
    return bundle.write({
        format: 'umd',
        dest: distFile,
        sourceMap: false,
        moduleName: 'blockjsShare'
    })
}).then(() => {
    var result = UglifyJS.minify(distFile);
    fs.writeFileSync(distFileMin, result.code);

    console.log(`${distFile} done!`)
});