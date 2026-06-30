import { getDashUser, getDashProject } from "../help/apis.js"
import { DashAttachData, setDashAttachData } from "../help/data.js"

const info = {
    users: {
        getUsername: async (id) => {
            if (typeof id === "number") {
                const result = await getDashUser(id)
                return result?.username || ""
            } else {
                return ""
                console.error("type id is not a number")
            }
        },
        getId: async (user) => {
            const result = await getDashUser(user)
            return result?.id || ""
        },
        getRole: async (user) => {
            const result = await getDashUser(user)
            return result?.role || "dasher"
        },
        getDescription: async (user) => {
            const result = await getDashUser(user)
            return result?.profile?.description || ""
        },
        date: {
            join: async (user) => {
                const result = await getDashUser(user)
                return result?.joinedAt || null
            },
            lastActive: async (user) => {
                const result = await getDashUser(user)
                return result?.lastActive || null
            }
        },
        getLinks: async (user) => {
            const result = await getDashUser(user)
            return result?.profile?.links || []
        },
        getAchievements: async (user) => {
            const result = await getDashUser(user)
            return result?.profile?.achievements || []
        },
        getRecommendedProject: async (user) => {
            const result = await getDashUser(user)
            return result?.profile?.recommendedProject || {}
        }
    },
    projects: {}
}

export default info