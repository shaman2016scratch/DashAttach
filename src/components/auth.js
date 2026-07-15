import { singinDash, getSessionDash, checkIsLogin, getSessionMessagesDash, getSessionActivityDash, logoutDash } from "../help/apis.js"
import { DashAttachData, setDashAttachData } from "../help/data.js"

const auth = {
    login: singinDash,
    myInfo: {
        isLogin: async () => {
            const isLoginDash = await checkIsLogin()
            return isLoginDash
        },
        getMyId: async () => {
            const result = await getSessionDash()
            return result?.user?.id || null
        },
        getMyUsername: async () => {
            const result = await getSessionDash()
            return result?.user?.username || ""
        },
        getMyMessages: getSessionMessagesDash,
        getActivity: getSessionActivityDash
    },
    logout: logoutDash
}

export default auth