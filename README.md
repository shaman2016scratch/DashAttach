# DashAttach
Dashattach - library for interacting with the Dash API.

Last version: 0.0.2

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
DashAttach.auth.login(user, password)
// Example:
DashAttach.auth.login("Dasher", "Password30532")
// Check is login:
DashAttach.auth.myInfo.isLogin()
// Example:
if (DashAttach.auth.myInfo.isLogin()) {
    console.log("You is login in Dash")
} else {
    console.log("You is not login in Dash")
}
```
### Get my information
```JavaScript
DashAttach.auth.myInfo.getMyId() // get my id in Dash. Return: number/null
DashAttach.auth.myInfo.getMyUsername() // get my username in Dash. Return: string
DashAttach.auth.myInfo.getMyMessages() // get my messages in Dash. Return: array
```
### Get user information
```JavaScript
DashAttach.info.users.getUsername(id) // get username of user by id. Support: olny number, return: string
DashAttach.info.users.getId(username) // get id of user by id. Return: number
DashAttach.info.users.getRole(user) // get role of user by id/username. Return: string
DashAttach.info.description.getDescription(user) // get description of user by id/username. Return: string
DashAttach.info.users.date.join(user) // get join date of user by id/username. Return: string
DashAttach.info.users.date.lastActive(user) // get date of last active of user by id/username. Return: string
DashAttach.info.users.getLinks(user) // get links of user by id/username. Return: array
DashAttach.info.users.getAchievements(user) // get achievements of user by id/username. Return: array
DashAttach.info.users.getRecommendedProject(user) // get recommended project of user by id/username. Return: object
DashAttach.info.users.getProjects(user, offset, limit) // get projects of user by id/username. Return: array
DashAttach.info.users.getFollowers(user, offset, limit) // get followers of user by id/username. Return: array
DashAttach.info.users.getFollowing(user, offset, limit) // get following of user by id/username. Return: array
DashAttach.info.users.getGradient(user) // get gradient (olny for Dash Supporters) of user by id/username. Return: unknown
DashAttach.info.users.getAvatar(user) // get avatar url of user by id/username. Return: string
```
### Get project information
```JavaScript
DashAttach.info.projects.getName(id) // get name of project. Return: string
DashAttach.info.projects.getAuthorId(id) // get id of author of project. Return: number
DashAttach.info.projects.getAuthorUsername(id) // get username of author of project. Return: string
DashAttach.info.projects.getDescription(id) // get description of project. Return: string
DashAttach.info.projects.getTrumbnail(id) // get trumbnail user of project. Return: string
```
### Other
```JavaScript
DashAttach.featuredProjects(offset, limit) // get featured projects. Return: array
```