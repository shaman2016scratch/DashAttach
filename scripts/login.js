import DashAttach from '..';
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function login(user, pass) {
    const login = await DashAttach.auth.login(user, pass)
    console.log(login)
}

const uid = await rl.question('ID: ');
const password = await rl.question('Password: ');
login(uid, password)

rl.close()