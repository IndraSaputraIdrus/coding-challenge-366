import { exec } from "node:child_process"

const runCmd = (cmd: string) => new Promise((resolve, reject) => {
  exec(cmd, (error, stdout) => {
    if (error) reject(error)
    resolve(process.stdout.write(stdout))
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

  await runCmd("git add .")
  await runCmd(`git commit -m "${message}"`)
  await runCmd("git push")

  break
}

