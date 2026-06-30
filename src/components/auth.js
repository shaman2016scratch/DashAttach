import { singinDash, getSessionDash, checkIsLogin } from "../help/apis.js"
import { DashAttachData, setDashAttachData } from "../help/data.js"

const auth = {
    login: singinDash,
    myInfo: {
        isLogin: async () => {
            const isLoginDash = await checkIsLogin()
            let DashAttachDataCash = DashAttachData
            DashAttachDataCash.isLogin = isLoginDash
            setDashAttachData(DashAttachDataCash)
            return isLoginDash
        },
        getMyId: async () => {
            const result = await getSessionDash()
            return result?.id || null
        },
        getMyUsername: async () => {
            const result = await getSessionDash()
            return result?.username || ""
        }
    }
}

export default auth