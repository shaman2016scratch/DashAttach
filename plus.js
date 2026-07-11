// version: 0.1.0

import DashAttach from './index.js';

const DashAttachPlus = {
    projects: {
        info: async (id) => {
            let returN = {}
            returN.name = await DashAttach.info.projects.getName(id)
            returN.description = await DashAttach.info.projects.getDescription(id)
            returN.fires = await DashAttach.info.projects.stats.fires(id)
            returN.views = await DashAttach.info.projects.stats.views(id)
            returN.author = {}
            returN.author.username = await DashAttach.info.projects.getAuthorUsername(id)
            returN.author.id = await DashAttach.info.projects.getAuthorId(id)
            returN.author.role = await DashAttach.info.users.getRole(returN.author.username)
            return returN
        },
        dbp: async (id) => {
            const buffer = await (await fetch(await DashAttach.info.projects.getFileURL(id))).buffer()
            return buffer
        },
        trumbnail: async (id) => {
            const buffer = await (await fetch(await DashAttach.info.projects.getTrumbnail(id))).buffer()
            return buffer
        }
    },
    users: {
        info: async (user) => {
            let returN = {}
            returN.username = await DashAttach.info.users.getUsername(user)
            returN.id = await DashAttach.info.users.getId(user)
            returN.description = await DashAttach.info.users.getDescription(user)
            returN.role = await DashAttach.info.users.getRole(user)
            return returN
        },
        avatar: async (id) => {
            const buffer = await (await fetch(await DashAttach.info.users.getAvatar(id))).buffer()
            return buffer
        }
    }
}

export default DashAttachPlus