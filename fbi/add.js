const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const stat = fs.stat
const _root = process.cwd()

function copyFile(src, dst, options) {
  fs.readdir(src, (err, paths) => {
    if (err) {
      throw err
    }

    paths.forEach(path => {
      const _src = src + '/' + path
      const _dst = dst + '/' + path

      stat(_src, (err, st) => {
        if (err) {
          throw err
        }

        if (st.isFile()) {
          fs.readFile(_src, 'UTF-8', (err, data) => {

            if (err) {
              throw err
            }

            let wdata = data
            for (var opt in options) {
              let re = new RegExp('<%=\\s+' + opt + '%>', 'gi')
              wdata = wdata.replace(re, options[opt])
            }

            fs.writeFile(_dst, wdata, 'UTF-8', (err, data) => {
              if (err) {
                throw err
              }

              // console.log('copy done---->',path)

            })

          })

        } else if (st.isDirectory()) {
          exists(_src, _dst, options, copyFile)
        }
      })
    })
  })
}

function exists(src, dst, options, callback) {
  fs.exists(dst, exists => {
    if (exists) {
      callback(src, dst, options)
    } else {
      fs.mkdir(dst, () => {
        callback(src, dst, options)
      })
    }
  })
}

const config = {
  moduleName: '',
  description: '',
  author: '',
}

const promps = []

console.log('')
console.log(chalk.red('欢迎使用blockjs子模块自动生成功能'))
console.log('')

if (config.moduleName !== 'string') {
  promps.push({
    type: 'input',
    name: 'moduleName',
    message: '请输入模块名称(blockjs-xxx or blockjs-xxx-xxxx)',
    validate: function (input) {
      if (!input) {
        return '不能为空'
      }
      return true
    }
  })
}

if (config.description !== 'string') {
  promps.push({
    type: 'input',
    name: 'moduleDescription',
    message: '请输入模块描述(非必填)'
  })
}

if (config.author !== 'string') {
  promps.push({
    type: 'input',
    name: 'author',
    message: '请输入作者姓名(非必填)'
  })
}

inquirer.prompt(promps).then((answers) => {
  const dst = _root + '/packages/' + answers.moduleName
  exists('./fbi/tmps', dst, {
    packageName: answers.moduleName,
    packageDesc: answers.moduleDescription,
    author: answers.author
  }, copyFile)

}).then(() => {
  console.log('')
  console.log(chalk.green('子模块目录创建完毕！'))
  console.log('')
})