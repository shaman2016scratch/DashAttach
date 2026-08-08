import DashAttach from "./index.js";

async function tests() {
console.log(await DashAttach.info.users.getRole(7))
console.log(await DashAttach.info.users.getId(7))
console.log(await DashAttach.info.users.getUsername(7))
console.log(await DashAttach.info.projects.getAuthorUsername(576))
console.log(await DashAttach.info.projects.getAuthorId(576))
console.log(await DashAttach.featuredProjects(0, 5))
console.log(await DashAttach.auth.myInfo.isLogin())
console.log(await DashAttach.info.users.getGradient(7))
console.log(await DashAttach.info.projects.stats.fires(576))
console.log(await DashAttach.info.users.stats.followers(7))
console.log(await DashAttach.info.users.stats.projects(7))
console.log(await DashAttach.auth.myInfo.getMyId())
console.log(await DashAttach.auth.myInfo.getMyUsername())
const dbp = await DashAttach.dbp.init(576)
console.log(DashAttach.dbp.meta.vm(dbp))
console.log(DashAttach.dbp.meta.platform(dbp))
const stage = await DashAttach.dbp.target.getByName(dbp, "stage")
const lists = await stage.listObj()
const fileDataList = lists["file data"]
}
