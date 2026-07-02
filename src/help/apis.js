import { DashAttachData, setDashAttachData } from "../help/data.js"

const checkIsLogin = async () => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/session`, {
        credentials: "include"
    })
    const res = await req.json()
    let returN = false
    if (res.ok) {
        returN = true
    }
    return returN
}

const singinDash = async (userId, password) => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/auth/login`, {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            password
        })
    })
    const res = await req.json()
    let DashAttachDataCash = DashAttachData
    DashAttachDataCash.isLogin = true
    setDashAttachData(DashAttachDataCash)
    return res
}

const getSessionDash = async () => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/session`, {
        credentials: "include"
    })
    const res = await req.json()
    return res.user
}

const getDashUser = async (user) => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}`)
    const res = await req.json()
    return res.user
}

const getDashProject = async (project) => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/projects/${project}`)
    const res = await req.json()
    return res.project
}

const getDashUserProjects = async (user, offset, limit) => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/projects?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res.projects
}

const getDashUserFollowers = async (user, offset, limit) => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/followers?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res.followers
}

const getDashUserFollowing = async (user, offset, limit) => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/following?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res.following
}

const getSessionMessagesDash = async () => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/session/messages`, {
        credentials: "include"
    })
    const res = await req.json()
    return res.messages
}

export { checkIsLogin, singinDash, getSessionDash, getDashUser, getDashProject, getDashUserProjects, getDashUserFollowers, getDashUserFollowing, getSessionMessagesDash }