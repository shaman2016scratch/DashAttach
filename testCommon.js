const DashAttach = require('dashattach');

console.log(await DashAttach.info.users.getRole(7))
console.log(await DashAttach.info.users.getGradient(7))
console.log(await DashAttach.info.users.getId(7))
console.log(await DashAttach.info.users.getUsername(7))
console.log(await DashAttach.info.projects.getAuthorUsername(100))
console.log(await DashAttach.featuredProjects(0, 10))
console.log(await DashAttach.auth.myInfo.isLogin())