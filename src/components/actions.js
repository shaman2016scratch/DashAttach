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
                    credentials: "include",
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
                    credentials: "include",
                    body: BODY
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        follow: async (target) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/${target}/follow`, {
                    method: "POST",
                    credentials: "include"
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        unfollow: async (target) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/${target}/unfollow`, {
                    method: "POST",
                    credentials: "include"
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        setGradient: async (gradient) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/set-gradient`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        gradiend
                    })
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        setRecommendedProject: async (projectId) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/set-recommended-project`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        projectId
                    })
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        addLink: async (label, url) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/add-link`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        label,
                        link: url
                    })
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        updateLink: async (id, label, url) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/update-link`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        linkIndex: id,
                        label,
                        link: url
                    })
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        remoweLink: async (id) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/users/remowe-link`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        linkIndex: id
                    })
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        fireProject: async (id) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/projects/${id}/fire`, {
                    method: "POST",
                    credentials: "include"
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        unfireProject: async (id) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/projects/${id}/fire`, {
                    method: "DELETE",
                    credentials: "include"
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        uploadTrumbnail: async (id, file, filename) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const BODY = new FormData()
                BODY.append('file', file, { filename })
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/projects/${id}/upload-trumbnail`, {
                    method: "POST",
                    credentials: "include",
                    body: BODY
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        viewProject: async (id) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/projects/${id}/view`, {
                    method: "POST",
                    credentials: "include"
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        markAllMessagesAsRead: async (id) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/messages/mark-all-as-read`, {
                    method: "POST",
                    credentials: "include"
                })).json()
                return res
            } else {
                console.log("Please, login!")
                return {}
            }
        },
        uploadProject: async (file, filename, name, description) => {
            const imIsLogin = await checkIsLogin()
            if (imIsLogin) {
                const BODY = new FormData()
                BODY.append('file', file, { filename })
                BODY.append('name', name.toString())
                BODY.append('description', description.toString())
                const res = await (await fetch(`https://${DashAttachData.apiUrl}/save-project`, {
                    method: "POST",
                    credentials: "include",
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