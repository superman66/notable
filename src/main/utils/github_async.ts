//git目录下新建index.js
const child_process = require('child_process')

const COMMIT_MESSAGE_TEMPLATE = `Update from notable at ${new Date()}`
//用&&连接多条CMD命令
const gitPullCmd = `git pull`
const gitPushCmd = `git add --all :/ && git commit -m "${COMMIT_MESSAGE_TEMPLATE}" && git push origin master`

//定义一个执行cmd的函数
const execCMD = function(cmd) {
  return new Promise(resolve => {
    child_process.exec(cmd, function(error, stdout, stderr) {
      if (error) {
        console.error('error: ' + error)
        return
      }
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
      resolve()
    })
  })
}

/**
 * github 同步
 * 1、执行git pull
 * 2、git push
 */
export function githubAsync() {
  execCMD(gitPushCmd)
  // execCMD(gitPullCmd).then(() => execCMD(gitPushCmd))
}
