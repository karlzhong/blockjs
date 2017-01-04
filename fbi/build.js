const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const rollup = require('rollup')
const glob = require('glob')
const rm = require('rimraf')
const buble = require('./plugins/buble')(require)
const root = 'packages/'
function noop() { }

// 遍历已有模块
const components = glob.sync(root + '*')

// console.log(components) => [ 'packages/cookie', 'packages/monitor' ]

components.map(item => {
    // console.log(item)
    const componentName = path.basename(item)
    // console.log(componentName) => cookie , monitor

    // 定义入口文件
    const entries = glob.sync(`${item}/src/**/*`, {
        dot: true,
        ignore: ['**/*/package.json', '.*']
    })

    // console.log(entries) ==> [ 'packages/cookie/src/index.js' ], [ 'packages/monitor/src/index.js' ]

    // 定义输出目录
    const folder = `${item}/lib`;

    // 生成目录之前先删除旧目录
    rm.sync(folder)

    // 重新生成目录
    mkdirp.sync(folder)

    return entries.map(entry => {
        // 单个模块资源(js文件) => packages/cookie/lib/index.js, packages/monitor/lib/index.js
        const distFile = `${folder}/${entry.split('/').pop()}`

        return rollup.rollup({

            entry: entry,
            plugins: [
                buble({
                    include: root + '**/*.js',
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
            bundle.write({
                format: 'cjs',
                dest: distFile,
                sourceMap: false
            }).then(() => {
                ctx.log(`${distFile} done!`)
            });
        });
    })
})

/*
buble transforms options:

  arrow
  classes
  collections
  computedProperty
  conciseMethodProperty
  constLoop
  dangerousForOf
  dangerousTaggedTemplateString
  defaultParameter
  destructuring
  forOf
  generator
  letConst
  modules
  numericLiteral
  parameterDestructuring
  reservedProperties
  spreadRest
  stickyRegExp
  templateString
  unicodeRegExp
  
*/