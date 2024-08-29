import { exec } from "node:child_process"

const runCmd = (cmd: string) => new Promise((resolve, reject) => {
  exec(cmd, (error, stdout) => {
    if (error) reject(error)
    resolve(stdout)
  })
})

const promt = 'enter message: '
process.stdout.write(promt)

for await (const line of console) {
  let message = ""

  if (line.match(/[0-9]/g)) {
    message = `${line}/366`
  } else {
    message = `${line}`
  }

  const add = await runCmd("git add .")
  const commit = await runCmd(`git commit -m "${message}"`)
  const push = await runCmd("git push")

  console.log({ add, commit, push })

  break
}

