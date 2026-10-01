const DashAttachDataDefault = {
    isLogin: false,
    apiUrl: "api.dashblocks.org",
    useProxy: false,
    originalApiUrl: "api.dashblocks.org",
    defaultValues: {
        offset: 0,
        limit: 20
    },
    maxLimit: 40,
    minLimit: 0,
    maxOffset: Infinity,
    minOffset: 0
}

let DashAttachData = DashAttachDataDefault

const setDashAttachData = (data) => {
    DashAttachData = data
}

const resetDashAttachData = () => {
    DashAttachData = DashAttachDataDefault
}

export { DashAttachDataDefault, DashAttachData, setDashAttachData, resetDashAttachData }
