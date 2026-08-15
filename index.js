import { singinDash, getSessionDash, getDashUser, getDashProject } from "./src/help/apis.js"
import { DashAttachData, setDashAttachData } from "./src/help/data.js"
import auth from "./src/components/auth.js"
import info from "./src/components/information.js"
import actions from "./src/components/actions.js"
import dbp from "./src/components/dbp.js"
import dev from "./src/components/dev/index.js"

const DashAttach = {
    featuredProjects: async (offset, limit) => {
        const result = await (await fetch(`https://${DashAttachData.apiUrl}/featured-projects?offset=${+offset || 0}&limit=${+limit || 5}`)).json()
        return result.projects
    },
    auth,
    info,
    actions,
    dev,
    search: {
        projects: async (q, offset, limit) => {
            const result = await (await fetch(`https://${DashAttachData.apiUrl}/search/projects?offset=${+offset || 0}&limit=${+limit || 5}&q=${q}`)).json()
            return result.results
        },
        projectsCount: async (q) => {
            const result = await (await fetch(`https://${DashAttachData.apiUrl}/search/projects?q=${q}`)).json()
            return result.total
        }
    },
    setProxy: (url) => {
        let cacheDashAttachData = DashAttachData
        cacheDashAttachData.apiUrl = url
        cacheDashAttachData.useProxy = true
        setDashAttachData(cacheDashAttachData)
    },
    dbp,
    library: {
        name: 'DashAttach',
        version: '0.4.2',
        author: 'polzovatel_8787',
        license: 'GPL-3.0'
    },
    fetch: async (path, json) => {
        if (json) {
            const req = await fetch(`https://${DashAttachData.apiUrl}${path}`, json)
            const res = await req.json()
            return res
        } else {
            const req = await fetch(`https://${DashAttachData.apiUrl}${path}`)
            const res = await req.json()
            return res
        }
    },
    removeProxy: (url) => {
        let cacheDashAttachData = DashAttachData
        cacheDashAttachData.apiUrl = DashAttachData.originalApiUrl
        cacheDashAttachData.useProxy = false
        setDashAttachData(cacheDashAttachData)
    },
}

export default DashAttach
