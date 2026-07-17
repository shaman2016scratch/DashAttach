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
    dbp
}

export default DashAttach