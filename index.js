import { singinDash, getSessionDash, getDashUser, getDashProject } from "./src/help/apis.js"
import { DashAttachData, setDashAttachData } from "./src/help/data.js"
import auth from "./src/components/auth.js"
import info from "./src/components/information.js"

const DashAttach = {
    auth,
    info
}

export default DashAttach