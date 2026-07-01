import { singinDash, getSessionDash, getDashUser, getDashProject } from "./src/help/apis.js"
import { DashAttachData, setDashAttachData } from "./src/help/data.js"
import auth from "./src/components/auth.js"
import info from "./src/components/information.js"
import actions from "./src/components/actions.js"

const DashAttach = {
    featuredProjects: async () => {
        const result = await (await fetch("https://api.dashblocks.org/featured-projects")).json()
        return result
    },
    auth,
    info,
    actions
}

export default DashAttach