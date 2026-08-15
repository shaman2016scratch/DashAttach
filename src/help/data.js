const DashAttachDataDefault = {
    isLogin: false,
    apiUrl: "api.dashblocks.org",
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
