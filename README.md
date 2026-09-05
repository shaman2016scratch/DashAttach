# DashAttach
Dashattach - library for interacting with the Dash API (Dash/Dashlocks - scratch mod, like turbowarp. dashblocks.org).

Last version: [0.4.4](https://www.npmjs.com/package/dashattach/v/0.4.4)

npm: https://www.npmjs.com/package/dashattach

## Documentation
**Warning: no use in sites if not is use proxy.**
### Install and import
For last version:
```bash
npm install dashattach
```
For other version:
```bash
npm install dashattach@version
# example:
npm install dashattach@0.3.4
```
```JavaScript (ESM)
import DashAttach from "dashattach"
```
### Getting info of library
```JavaScript
DashAttach.library.version // version of library.
DashAttach.library.name // name of library...
DashAttach.library.author // author of library
DashAttach.library.license // license of library
```
### Session
```JavaScript
await DashAttach.auth.login(user, password) // login
await DashAttach.auth.myInfo.isLogin() // check is login
await DashAttach.auth.logout() // logout
// 1st example:
await DashAttach.auth.login("Dasher", "Password30532")
const isLogin = await DashAttach.auth.myInfo.isLogin()
// 2nd example:
if (isLogin) {
    console.log("You is login in Dash")
} else {
    console.log("You is not login in Dash")
}
```
### Get my information
```JavaScript
await DashAttach.auth.myInfo.getMyId() // get my id in Dash. Return: number/null
await DashAttach.auth.myInfo.getMyUsername() // get my username in Dash. Return: string
await DashAttach.auth.myInfo.getMyMessages(offset, limit) // get my messages in Dash. Return: array. Max limit: 40
await DashAttach.auth.myInfo.getActivity(offset, limit) // get activity of my following users in Dash. Return: array. Max limit: 40
```
### Get user information
```JavaScript
await DashAttach.info.users.getUsername(id) // get username of user. Support: olny number, return: string
await DashAttach.info.users.getId(username) // get id of user. Return: number
await DashAttach.info.users.getRole(user) // get role of user. Return: string
await DashAttach.info.description.getDescription(user) // get description of user. Return: string
await DashAttach.info.users.date.join(user) // get join date of user. Return: string
await DashAttach.info.users.date.lastActive(user) // get date of last active of user. Return: string
await DashAttach.info.users.getLinks(user) // get links of user. Return: array
await DashAttach.info.users.getAchievements(user) // get achievements of user. Return: array
await DashAttach.info.users.getRecommendedProject(user) // get recommended project of user. Return: object
await DashAttach.info.users.getProjects(user, offset, limit) // get projects of user. Return: array. Max limit: 40
await DashAttach.info.users.getFollowers(user, offset, limit) // get followers of user. Return: array. Max limit: 40
await DashAttach.info.users.getFollowing(user, offset, limit) // get following of user. Return: array. Max limit: 40
await DashAttach.info.users.getGradient(user) // get gradient (olny for Dash Supporters) of user. Return: unknown
await DashAttach.info.users.getAvatar(user) // get avatar url of user. Return: string
await DashAttach.info.users.stats.projects(user) // get count of all projects of user. Return: number
await DashAttach.info.users.stats.followers(user) // get count of all followers of user. Return: number
await DashAttach.info.users.stats.following(user) // get count of all following of user. Return: number
await DashAttach.info.users.stats.unreadMessages(user) // get count of unread messages of user. Return: number
await DashAttach.info.users.buffer.avatar(user) // get buffer of avatar of user. Return: buffer
await DashAttach.info.users.getActions(user, offset, limit) // get actions of user. Return: array
/*
    Argument types:
    id = get info by id
    username = get info by username
    user = get info by username or id
    offset = offset for request
    limit = limit for request
*/
```
### Get project information
```JavaScript
await DashAttach.info.projects.getName(id) // get name of project. Return: string
await DashAttach.info.projects.getAuthorId(id) // get id of author of project. Return: number
await DashAttach.info.projects.getAuthorUsername(id) // get username of author of project. Return: string
await DashAttach.info.projects.getDescription(id) // get description of project. Return: string
await DashAttach.info.projects.getTrumbnail(id) // get trumbnail url of project. Return: string
await DashAttach.info.projects.stats.fires(id) // get fires of project. Return: number
await DashAttach.info.projects.stats.views(id) // get views of project. Return: number
await DashAttach.info.projects.stats.forks(id) // get forks count of project. Return: number
await DashAttach.info.projects.getForks(id, offset, limit) // get forks of project. Return: array
DashAttach.info.projects.getFileURL(id) // get file url of project. Return: string
await DashAttach.info.projects.buffer.dbp(id) // get buffer of project file. Return: buffer
await DashAttach.info.projects.buffer.trumbnail(id) // get buffer of trumbnail of project. Return: buffer
```
### Actions
```JavaScript
await DashAttach.actions.setDescription(description) // set my description
await DashAttach.actions.uploadAvatar(buffer, filename) // set my avatar
await DashAttach.actions.follow(user) // follow user
await DashAttach.actions.unfollow(user) // unfollow user
await DashAttach.actions.setGradient(gradient) // set gradient. For only Dash Supporters
await DashAttach.actions.setRecommendedProject(id) // set recommended project
await DashAttach.actions.addLink(label, url) // add link
await DashAttach.actions.updateLink(id, label, url) // update link
await DashAttach.actions.remoweLink(id) // delete link
await DashAttach.actions.fireProject(id) // fire project
await DashAttach.actions.unfireProject(id) // unfire project
await DashAttach.actions.uploadTrumbnail(id, buffer, filename) // upload trumbnail for project
await DashAttach.actions.viewProject(id) // add view project
await DashAttach.actions.markAllMessagesAsRead(id) // mark all messages as read
await DashAttach.actions.uploadProject(buffer, filename, name, description) // upload project
await DashAttach.actions.forkProject(buffer, filename, name, description, parentProjectId) // upload project fork
```
### DBP (DashBlocks Project) files
Note: files .dbp is .zip files
```JavaScript
await DashAttach.dbp.init(id) // JSZip zip of Dash project. Return: JSZip
await DashAttach.dbp.load(buffer) // JSZip zip of Dash project buffer (from await DashAttach.info.projects.buffer.dbp() and other). Return: JSZip
await DashAttach.dbp.json(dbp) // get project.json of dash project. Return: object
await DashAttach.dbp.extensionStorage.all(dbp) // get extension storage (storage for extension) of this project. Return: object
await DashAttach.dbp.extensionStorage.getExtension(dbp, extensionId) // get storage of extension. Return: object
await DashAttach.dbp.extensionStorage.get(dbp, extensionId, key) // get key in storage of extension. Return: Any
await DashAttach.dbp.extensionStorage.set(dbp, extensionId, key, value) // set key in storage of extension.
await DashAttach.dbp.extensionStorage.setExtension(dbp, extensionId, value) // set storage of extension. typeof value === 'object'
await DashAttach.dbp.stage.vars(dbp) // get list of vars of stage. Return: array
await DashAttach.dbp.stage.lists(dbp) // get list of lists of stage. Return: array
await DashAttach.dbp.targets.data(dbp) // get data of targets. Return: object ([stage:object,sprite1:object,sprite2:object,...])
await DashAttach.dbp.targets.list(dbp) // get list of keys of DashAttach.dbp.targets.data(dbp). Return: array
await DashAttach.dbp.targets.listData(dbp) // get list of values of DashAttach.dbp.targets.data(dbp). Return: array
await DashAttach.dbp.target.getByIndex(dbp, index) // get class 'Tagret' by target index (getting by key 'indexNum' in data of target (only in dbp.targets.data)). Return: Target
await DashAttach.dbp.target.getByName(dbp, name) // get class 'Tagret' by target name (getting by key 'name' in data of target). Return: Target
await DashAttach.dbp.target.getByObject(dbp, index) // get class 'Tagret' by target object (object in dbp.targets.data). Return: Target
await DashAttach.dbp.target.costumeFile(dbp, targetClass, costumeIndex) // Return: ArrayBuffer
await DashAttach.dbp.target.soundFile(dbp, targetClass, soundIndex) // Return: ArrayBuffer
await DashAttach.dbp.meta.vm(dbp) // get vm version
await DashAttach.dbp.meta.agent(dbp) // get user agent of last project editor
await DashAttach.dbp.meta.platform(dbp) /* Get Platform. Return: Object {
    name: string (example: 'Dash'),
    url: string (example: 'https://dashblocks.org/')
}
*/
await DashAttach.dbp.extensions(dbp) // get extensions ids. Return: array
await DashAttach.dbp.extensionURLs(dbp) // get extensions urls. Return: object (id: url)
/*
    Arguments:
    id - number of project id
    buffer - buffer
    dbp - JSZip of Dash project
    extensionId - id of extension
*/
```
#### Class 'Target'
```JavaScript
// Getting
const dbp = await DashAttach.dbp.init(555)
const target = DashAttach.dbp.target.getByIndex(dbp, 0)
// Using
target.isStage
target.name
tagret.vars
target.lists
target.varObj() // object of variables (key = name, value = value)
target.listObj() // object of lists (key = name, value = value)
target.boardcasts // object of messages (key = id, value = name)
target.blocks // object of blocks (key = id, value = data)
target.block(id) // object of block
target.blockClass(id) // class of block
target.comments
target.currentCostume
target.costumes
target.sounds
target.volume
target.visible
target.pos // position array ([x,y])
target.size
```
#### Class 'Block'
```JavaScript
// Getting
const dbp = await DashAttach.dbp.init(576)
const target = DashAttach.dbp.target.getByIndex(dbp, 0)
const block = target.blockClass("=#")
// Using
block.opcode
block.nextBlock // next block id
block.parentBlock // parent block id
block.fields
block.inputs
block.shadow
block.topLevel
block.pos // array of block position ([x,y])
```
### Other
```JavaScript
await DashAttach.featuredProjects(offset, limit) // get featured projects. Return: array. Max limit: 40
await DashAttach.search.projects(q, offset, limit) // search projects in Dash. Return: array. Max limit: 40
await DashAttach.search.projectsCount(q) // count of all projects of search projects. Return: number.
DashAttach.setProxy(url) // set proxy for api. CREATED TO WORK AROUND CORS FOR BROWSER USE.
await DashAttach.fetch(path, json) // http-requests to Dash API with path and json. json optional
DashAttach.removeProxy() // delete proxy
```
### CORS
CORS Dash API: localhost:3000 and dashblocks.org.
### Examples
```JavaScript
// 1st example: Login utility
import DashAttach from 'dashattach'
import { DashAttachInput2 } from 'dashattach/input'

async function start() {
    const user = await DashAttachInput2("What's your username/id")
    const password = await DashAttachInput2("What's your password?")
    await DashAttach.auth.login(user, password)
}
start()
// 2nd example: project publish utility
import DashAttach from 'dashattach'
import fs from 'fs'
import readline from 'node:readline'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function publishProject() {
    rl.question(`What's file name?`, filename => {
        rl.question(`What's file path?`, filepath => {
            const buffer = fs.readFileSync(filepath)
            rl.question(`What's project name?`, name => {
                rl.question(`What's project description?`, description => {
                    await DashAttach.actions.uploadProject(buffer, filename, name, description)
                });
            });
        });
    });
}

publishProject()
// 3rd example: library for publish project
import DashAttach from 'dashattach'
import fs from 'fs'

async function publishProject(name, description, filePath, trumbnailFilePath) {
    const buffer = fs.readFileSync(filePath)
    const buffer2 = fs.readFileSync(trumbnailFilePath)
    const project = await DashAttach.actions.uploadProject(buffer, 'project.dbp', name, description)
    const projectId = project?.projectId || null
    if (!projectId === null) {
        const trumbnail = await DashAttach.actions.uploadTrumbnail(projectId, buffer2, 'image.png')
    } else {
        return 0
    }
    return projectId
}

export default publishProject
```
### DashAttachPlus
DashAttachPush - alternative for DashAttach
Last version: 0.1.2
#### Import
```JavaScript
import DashAttachPlus from 'dashattach/plus'
```
#### Projects
```JavaScript
await DashAttachPlus.projects.info(id) /*
    Info of project
    Return: object
    Return content: {
        name: string,
        description: string,
        fires: number,
        views: number,
        forksCount: number,
        forks: array,
        author: {
            username: string,
            id: number,
            role: string
        }
    }
*/
await DashAttachPlus.projects.dbp(id) /*
    DBP file (DashBlocks Project, like sb3, type: zip) of project
    Return: buffer
*/
await DashAttachPlus.projects.trumbnail(id) /*
    trumbnail file of project
    Return: buffer
*/
```
#### Users
```JavaScript
await DashAttachPlus.users.info(user) /*
    Info of user.
    Input: username/id
    Return: Object
    Return Content: {
        username: string,
        id: number,
        description: string,
        role: string,
        projects: array,
        stats: {
            projects: number,
            following: number,
            followers: number
        },
        following: array,
        followers: array
    }
*/
await DashAttachPlus.users.avatar(user) /*
    Avatar file of user
    Input: username/id
    Return: buffer
*/
```
### For developers
#### Help for components
```JavaScript
// Importing
import { checkIsLogin, singinDash, getSessionDash, getDashUser, getDashProject, getDashUserProjects, getDashUserFollowers, getDashUserFollowing, getSessionMessagesDash, getSessionActivityDash, logoutDash, getDashUserActions, getDashProjectForks, getOffset } from 'dashattach/src/help/apis.js'
import { DashAttachData, setDashAttachData } from 'dashattach/src/help/data.js'
import Zip, { generateZip, loadZipFromURL, loadZipFromBase64, loadZipFromBuffer, getFileInZip, setFileInZip } from 'dashattach/src/help/zip.js'
import SB3, { Target, Stage, Block } from 'dashattach/src/help/sb3.js'
// Usage
// 1. Zip
Zip /* Return: Object {
    generate: func,
    loadFromURL: func,
    loadFromBase64: func,
    loadFromBuffer: func,
    getFile: func,
    setFile: func
} */
generateZip() // generate zip. Return: JSZip
loadZipFromURL(zip, url) // add files of zip from URL to zip.
loadZipFromBase64(zip, base64) // add files of zip from base64 to zip.
loadZipFromBuffer(zip, buffer) // add files of zip from buffer to zip.
getFileInZip(zip, file) // Return: ?, for get string: getFileInZip(zip, file).async("string")
setFileInZip(zip, file, value, options) // https://stuk.github.io/jszip/documentation/api_jszip/file_data.html
// 2. sb3
new SB3(project) /* Class.
    sb3.targets: array
    sb3.extensionStorage: object. Olny get
    sb3.target(index): get target by index. Return: Object
    await sb3.targetObject(): get target object (Stage:object,sprite1:object,...),
    sb3.VM: vm version,
    sb3.UserAgent: user-agent of last project editor
    sb3.platform: platform of project. Return: Object {
        name: string,
        url: string
    }
*/
new Target(project, index) // Class.
new Stage(project) /* Class {
    stage.vars: variables of stage
    stage.lists: lists of stage
    stage.varObj: object of vars
    stage.listObj: object of lists
}
*/
```
#### Tests
```Bash
# Installing
git clone https://github.com/shaman2016scratch/DashAttach.git
cd ./DashAttach
# or
npm i dashattach # or yarn add dashattach
cd ./node_modules/dashattach
# or
npm i https://github.com/shaman2016scratch/DashAttach
cd ./node_modules/dashattach
# Using
npm test # main test
npm run testDev # developer test
npm run login # login to Dash
# Use dev-version
git switch develop
# Use main version
git switch main-develop
```
#### Inputs
```JavaScript
// Import
import { DashAttachInput, DashAttachInput2, DashAttachInput3 } from 'dashattach/input'
import { stdin as input, stdout as output } from 'node:process' // for first and last
// Using 1
await DashAttachInput('request', input, output)
// Using 2
await DashAttachInput2('request')
// Using 3
const rl = readline.createInterface({ input: input, output: output })
await DashAttachInput3('request', rl)
```