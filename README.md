# DashAttach
Dashattach - library for interacting with the Dash API (Dash/Dashlocks - scratch mod, like turbowarp. dashblocks.org).

Last version: [0.3.2](https://www.npmjs.com/package/dashattach/v/0.3.2)

npm: https://www.npmjs.com/package/dashattach

## Documentation
**Warning: no use in sites.**
### Install and import
For last version:
```bash
npm install dashattach
```
For other version:
```bash
npm install dashattach@version
# example:
npm install dashattach@0.2.0
```
```JavaScript (ESM)
import DashAttach from "dashattach"
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
DashAttach.info.users.getAvatar(user) // get avatar url of user. Return: string
await DashAttach.info.users.stats.projects(user) // get count of all projects of user. Return: number
await DashAttach.info.users.stats.followers(user) // get count of all followers of user. Return: number
await DashAttach.info.users.stats.following(user) // get count of all following of user. Return: number
await DashAttach.info.users.stats.unreadMessages(user) // get count of unread messages of user. Return: number
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
DashAttach.info.projects.getTrumbnail(id) // get trumbnail url of project. Return: string
await DashAttach.info.projects.stats.fires(id) // get fires of project. Return: number
await DashAttach.info.projects.stats.views(id) // get views of project. Return: number
DashAttach.info.projects.getFileURL(id) // get file url of project. Return: string
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
```
### Other
```JavaScript
await DashAttach.featuredProjects(offset, limit) // get featured projects. Return: array. Max limit: 40
await DashAttach.seatch.projects(q, offset, limit) // search projects in Dash. Return: array. Max limit: 40
await DashAttach.seatch.projectsCount(q) // count of all projects of search projects. Return: number.
```
### CORS
CORS Dash API: localhost:3000 and dashblocks.org. Please, no use DashAttach in your web sites.
### Examples
```JavaScript
// 1st example: Login utility
import DashAttach from 'dashattach'
import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What's your username/id?`, user => {
    rl.question(`What's your password?`, password => {
        DashAttach.auth.login(user, password)
    });
});
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