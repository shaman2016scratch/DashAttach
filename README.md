# DashAttach
Dashattach - library for interacting with the Dash API.

Last version: [0.2.1](https://www.npmjs.com/package/dashattach/v/0.2.1)

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
### Login
```JavaScript
await DashAttach.auth.login(user, password)
// Example:
await DashAttach.auth.login("Dasher", "Password30532")
// Check is login:
await DashAttach.auth.myInfo.isLogin()
// Example:
if (await DashAttach.auth.myInfo.isLogin()) {
    console.log("You is login in Dash")
} else {
    console.log("You is not login in Dash")
}
```
### Get my information
```JavaScript
await DashAttach.auth.myInfo.getMyId() // get my id in Dash. Return: number/null
await DashAttach.auth.myInfo.getMyUsername() // get my username in Dash. Return: string
await DashAttach.auth.myInfo.getMyMessages(offset, limit) // get my messages in Dash. Return: array
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
await DashAttach.info.users.getProjects(user, offset, limit) // get projects of user. Return: array
await DashAttach.info.users.getFollowers(user, offset, limit) // get followers of user. Return: array
await DashAttach.info.users.getFollowing(user, offset, limit) // get following of user. Return: array
await DashAttach.info.users.getGradient(user) // get gradient (olny for Dash Supporters) of user. Return: unknown
DashAttach.info.users.getAvatar(user) // get avatar url of user. Return: string
await DashAttach.info.users.stats.projects(user) // get count of all projects of user. Return: number
await DashAttach.info.users.stats.followers(user) // get count of all followers of user. Return: number
await DashAttach.info.users.stats.following(user) // get count of all following of user. Return: number
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
DashAttach.info.projects.getTrumbnail(id) // get trumbnail user of project. Return: string
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
```
### Other
```JavaScript
await DashAttach.featuredProjects(offset, limit) // get featured projects. Return: array
```
### CORS
CORS Dash API: localhost:3000 and dashblocks.org. Please, no use DashAttach in your web sites.