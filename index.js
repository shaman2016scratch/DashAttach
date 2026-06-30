let DashAttachData = {}

const singinDash = (userId, password) => {
    const req = await fetch("https://api.dashblocks.org/auth/login", {
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
    return res
}

const getSessionDash = () => {
    const req = await fetch("https://api.dashblocks.org/session", {
        credentials: "include"
    })
    const res = await req.json()
    return res.user
}

const getDashUser = (user) => {
    const req = await fetch(`https://api.dashblocks.org/users/${user}`)
    const res = await req.json()
    return res.user
}

const getDashProject = (project) => {
    const req = await fetch(`https://api.dashblocks.org/projects/${project}`)
    const res = await req.json()
    return res.project
}