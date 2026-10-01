import {
    getDashUser,
    getDashProject,
    getDashUserProjects,
    getDashUserFollowers,
    getDashUserFollowing,
    getDashUserActions,
    getDashProjectForks,
    getOffset,
    getDashStudio,
    getDashStudioProjects
} from "../help/apis.js"
import { DashAttachData } from "../help/data.js"

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
            const result = await getDashUserProjects(user, getOffset(offset), limit)
            return result || []
        },
        getFollowers: async (user, offset, limit) => {
            const result = await getDashUserFollowers(user, getOffset(offset), limit)
            return result || []
        },
        getFollowing: async (user, offset, limit) => {
            const result = await getDashUserFollowing(user, getOffset(offset), limit)
            return result || []
        },
        getGradient: async (user) => {
            const result = await getDashUser(user)
            return result?.profile?.gradient || null
        },
        getAvatar: async (user) => {
            const result = await getDashUser(user)
            return `https://${DashAttachData.apiUrl}/users/avatars/${result?.id}`
        },
        stats: {
            projects: async (user) => {
                const result = await getDashUser(user)
                return result?.profile?.stats?.projects || 0
            },
            followers: async (user) => {
                const result = await getDashUser(user)
                return result?.profile?.stats?.followers || 0
            },
            following: async (user) => {
                const result = await getDashUser(user)
                return result?.profile?.stats?.following || 0
            },
            unreadMessages: async (user) => {
                const result = await getDashUser(user)
                return result?.profile?.unreadMessages || 0
            }
        },
        buffer: {
            avatar: async (user) => {
                const result = await getDashUser(user)
                const req = await fetch(`https://${DashAttachData.apiUrl}/users/avatars/${result?.id}`)
                const imgAR = await req.arrayBuffer()
                const img = Buffer.from(imgAR)
                return img
            }
        },
        getActions: async (user, offset, limit) => {
            const result = await getDashUserActions(user, getOffset(offset), limit)
            return result?.actions || []
        },
        getAvatarFrame: async (user) => {
            const result = await getDashUser
            return result?.profile.avatarFrame || null
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
            return `https://${DashAttachData.apiUrl}/projects/trumbnails/${project}`
        },
        stats: {
            fires: async (project) => {
                const result = await getDashProject(project)
                return result?.stats?.fires || 0
            },
            views: async (project) => {
                const result = await getDashProject(project)
                return result?.stats?.views || 0
            },
            forks: async (project) => {
                const result = await getDashProject(project)
                return result?.stats?.forks || 0
            }
        },
        getFileURL: (project) => {
            return `https://${DashAttachData.apiUrl}/get-project/${project}`
        },
        buffer: {
            dbp: async (project) => {
                console.log(`https://${DashAttachData.apiUrl}/get-project/${project}`)
                const req = await fetch(`https://${DashAttachData.apiUrl}/get-project/${project}`)
                const dbpAR = await req.arrayBuffer()
                const dbp = Buffer.from(dbpAR)
                return dbp
            },
            trumbnail: async (project) => {
                const req = await fetch(`https://${DashAttachData.apiUrl}/projects/trumbnails/${project}`)
                const imgAR = await req.arrayBuffer()
                const img = Buffer.from(imgAR)
                return img
            }
        },
        getForks: async (project, offset, limit) => {
            const result = await getDashProjectForks(project, getOffset(offset), limit)
            return result || []
        }
    },
    studios: {
        getName: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.name || ""
        },
        getProjects: async (studio, offset, limit) => {
            const result = await getDashStudioProjects(studio, offset, limit)
            return result?.projects || []
        },
        getOwnerId: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.owner.id || 0
        },
        getOwnerUsername: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.owner.username || ""
        },
        getOwner: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.owner || {}
        },
        getDescription: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.description || ""
        },
        getAllowProjects: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.allowProjects || false
        },
        createdAt: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.createdAt || new Date()
        },
        updatedAt: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.updatedAt || new Date()
        },
        getTrumbnailId: async (studio) => {
            const result = await getDashStudio(studio)
            return result?.studio?.trumbnailId || 1
        },
        getTrumbnailURL: async (studio) => {
            const result = await getDashStudio(studio)
            return `https://${DashAttachData.apiUrl}://studios/trumbnails/${result?.studio?.trumbnailId || 1}`
        },
        stats: {
            projects: async (studio) => {
                const result = await getDashStudio(studio)
                return result?.studio?.projectsCount || 0
            }
        }
    }
}

export default info