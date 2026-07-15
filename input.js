import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const DashAttachInput = async (request, inputF, outputF) => {
    const rl = readline.createInterface({ input: inputF, output: outputF })
    const answer = await rl.question(request)
    rl.close()
    return answer
}

const DashAttachInput2 = async (req) => {
    const answer = await DashAttachInput(req, input, output)
    return answer
}

const DashAttachInput3 = async (req, rl) => {
    const answer = await rl.question(req)
    return answer
}

export { DashAttachInput, DashAttachInput2, DashAttachInput3 }