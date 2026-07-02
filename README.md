# DashAttach
Dashattach - library for interacting with the Dash API.

Last version: [0.0.3](https://www.npmjs.com/package/dashattach/v/0.0.3)

npm: https://www.npmjs.com/package/dashattach

## Documentation

Installing - `npm i dashattach`

### Install and import
```bash
npm install dashattach
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
await DashAttach.auth.myInfo.getMyMessages() // get my messages in Dash. Return: array
```
### Get user information
```JavaScript
await DashAttach.info.users.getUsername(id) // get username of user by id. Support: olny number, return: string
await DashAttach.info.users.getId(username) // get id of user by id. Return: number
await DashAttach.info.users.getRole(user) // get role of user by id/username. Return: string
await DashAttach.info.description.getDescription(user) // get description of user by id/username. Return: string
await DashAttach.info.users.date.join(user) // get join date of user by id/username. Return: string
await DashAttach.info.users.date.lastActive(user) // get date of last active of user by id/username. Return: string
await DashAttach.info.users.getLinks(user) // get links of user by id/username. Return: array
await DashAttach.info.users.getAchievements(user) // get achievements of user by id/username. Return: array
await DashAttach.info.users.getRecommendedProject(user) // get recommended project of user by id/username. Return: object
await DashAttach.info.users.getProjects(user, offset, limit) // get projects of user by id/username. Return: array
await DashAttach.info.users.getFollowers(user, offset, limit) // get followers of user by id/username. Return: array
await DashAttach.info.users.getFollowing(user, offset, limit) // get following of user by id/username. Return: array
await DashAttach.info.users.getGradient(user) // get gradient (olny for Dash Supporters) of user by id/username. Return: unknown
DashAttach.info.users.getAvatar(user) // get avatar url of user by id/username. Return: string
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
```
### Other
```JavaScript
await DashAttach.featuredProjects(offset, limit) // get featured projects. Return: array
```