import { getSessionDash, checkIsLogin } from "../help/apis.js"
import { DashAttachData } from "../help/data.js"
import FormData from 'form-data';

const actions = {
    profile: {
        setDescription: async (value) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/set-description`, {
                    method: "POST",
                    credentials: true,
                    body: JSON.stringify({
                        description: value
                    })
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        uploadAvatar: async (file, filename) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const BODY = new FormData()
                BODY.append('file', file, { filename })
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/upload-avatar`, {
                    method: "POST",
                    credentials: true,
                    body: BODY
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