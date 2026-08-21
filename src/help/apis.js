import { DashAttachData, setDashAttachData } from "../help/data.js"

const checkIsLogin = async () => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/session`, {
        credentials: "include"
    })
    const res = await req.json()
    let returN = false
    if (res.ok) {
        returN = true
        let cacheDashAttachData = DashAttachData
        cacheDashAttachData.isLogin = true
        cacheDashAttachData.session.user = res?.user?.id
        setDashAttachData(cacheDashAttachData)
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
    let cacheDashAttachData = DashAttachData
    cacheDashAttachData.isLogin = true
    setDashAttachData(cacheDashAttachData)
    return res
}

const getSessionDash = async () => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/session`, {
        credentials: "include"
    })
    const res = await req.json()
    if (req.ok) {
        let cacheDashAttachData = DashAttachData
        cacheDashAttachData.isLogin = true
        cacheDashAttachData.session.user = res?.user?.id
        setDashAttachData(cacheDashAttachData)
    }
    return res
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
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/projects?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res.projects
}

const getDashUserFollowers = async (user, offset, limit) => {
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/followers?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res.followers
}

const getDashUserFollowing = async (user, offset, limit) => {
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/following?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res.following
}

const getSessionMessagesDash = async (offset, limit) => {
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/session/messages?offset=${offset}&limit=${limit}`, {
        credentials: "include"
    })
    const res = await req.json()
    return res.messages
}

const getSessionActivityDash = async (offset, limit) => {
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/session/activity?offset=${offset}&limit=${limit}`, {
        credentials: "include"
    })
    const res = await req.json()
    return res.activity
}

const logoutDash = async () => {
    const req = await fetch(`https://${DashAttachData.apiUrl}/session/logout`, {
        credentials: "include"
    })
    const res = await req.json()
    return res
}

const getDashUserActions = async (user, offset, limit) => {
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/users/${user}/actions?offset=${offset}&limit=${limit}`, {
        credentials: "include"
    })
    const res = await req.json()
    return res
}

const getDashProjectForks = async (project, offset, limit) => {
    offset = offset || DashAttachData.defaultValues.offset
    limit = limit || DashAttachData.defaultValues.limit
    const req = await fetch(`https://${DashAttachData.apiUrl}/projects/${project}/forks?offset=${offset}&limit=${limit}`)
    const res = await req.json()
    return res
}

const getOffset = offset => {
    offset = offset || DashAttachData.defaultValues.offset
    if (offset > DashAttachData.maxOffset) offset = DashAttachData.maxOffset
    if (offset < DashAttachData.minOffset) offset = DashAttachData.minOffset
    return offset
}

export { checkIsLogin, singinDash, getSessionDash, getDashUser, getDashProject, getDashUserProjects, getDashUserFollowers, getDashUserFollowing, getSessionMessagesDash, getSessionActivityDash, logoutDash, getDashUserActions, getDashProjectForks, getOffset }