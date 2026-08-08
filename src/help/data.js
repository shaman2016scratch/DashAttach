const DashAttachDataDefault = {
    isLogin: false,
    apiUrl: "api.dashblocks.org",
    session: {
        user: 0,
        password: ""
    },
    useProxy: false,
    originalApiUrl: "api.dashblocks.org"
}

let DashAttachData = DashAttachDataDefault

const setDashAttachData = (data) => {
    DashAttachData = data
}

const resetDashAttachData = () => {
    DashAttachData = DashAttachDataDefault
}

export { DashAttachDataDefault, DashAttachData, setDashAttachData, resetDashAttachData }
