import { getSessionDash, checkIsLogin } from "../help/apis.js"
import { DashAttachData } from "../help/data.js"

const actions = {
    profile: {
        setDescription: async (value) => {
            if (await checkIsLogin()) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/set-description`, {
                    method: "POST",
                    credentials: true
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        }
    }
}

export default actions