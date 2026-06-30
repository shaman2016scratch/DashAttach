import { getDashUser, getDashProject, getDashUserProjects, getDashUserFollowers, getDashUserFollowing } from "../help/apis.js"

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
        },
        getProjects: async (user, offset, limit) => {
            const result = await getDashUserProjects(user, offset, limit)
            return result || []
        },
        getFollowers: async (user, offset, limit) => {
            const result = await getDashUserFollowers(user, offset, limit)
            return result || []
        },
        getFollowing: async (user, offset, limit) => {
            const result = await getDashUserFollowing(user, offset, limit)
            return result || []
        },
        getGradient: async (user) => {
            const result = await getDashUser(user)
            return result?.profile?.gradient || null
        },
        getAvatar: (user) => {
            return `https://api.dashblocks.org/users/avatars/${user}`
        }
    },
    projects: {
        getName: async (project) => {
            const result = await getDashProject(project)
            return result?.name || ""
        },
        getAuthorId: async (project) => {
            const result = await getDashProject(project)
            return result?.author?.id || null
        },
        getAuthorUsername: async (project) => {
            const result = await getDashProject(project)
            return result?.author?.username || ""
        },
        getDescription: async (project) => {
            const result = await getDashProject(project)
            return result?.description || ""
        },
        getTrumbnail: (project) => {
            return `https://api.dashblocks.org/projects/trumbnails/${project}`
        }
    }
}

export default info