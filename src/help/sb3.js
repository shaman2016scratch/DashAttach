class SB3 {
    constructor (project) {
        this.project = project
        this.targets = this.project.targets
    }

    get extensionStorage () {
        return this.project.extensionStorage
    }

    set extensionStorage (value) {
        this.project.extensionStorage = Object(value)
        return this.project.extensionStorage
    }

    extensionStorageExtension (extension, value) {
        this.project.extensionStorage[extension] = value
        return this.project.extensionStorage
    }

    extensionStorageExtension (extension) {
        return this.project.extensionStorage[extension]
    }

    target (index) {
        return this.targets[index]
    }

    targetObject () {
        let obj = {}
        for (let i = 0; i < this.targets.length; i++) {
            const targetData = this.target(i)
            obj[targetData.name] = targetData
            obj[targetData.name].indexNum = Object.keys(obj).length - 1
        }
        return obj
    }

    get VM () {
        return this.project.meta.vm
    }

    get UserAgent () {
        return this.project.meta.agent
    }

    get Platform () {
        return this.project.meta.platform
    }
}

class Target {
    constructor (project, number) {
        this.project = project
        this.index = number
        this.projectData = new SB3(this.project)
        this.my = this.projectData.target(this.index)
    }

    get isStage () {
        return this.my.isStage
    }

    get name () {
        return this.my.name
    }

    get vars () {
        return this.my.variables
    }

    get lists () {
        return this.my.lists
    }

    varObj () {
        let obj = {}
        const vars = this.my.variables
        const keys = Object.keys(vars)
        for (let i = 0; i < keys.length; i++) {
            const varData = vars[keys[i]]
            if (typeof varData[1] !== 'object') {
                obj[varData[0]] = varData[1]
            } else {
                obj[varData[0]] = varData[1].serialized
            }
            obj[varData[0]].push(Object.keys(obj).length)
            obj[varData[0]].push(keys[i])
        }
        return obj
    }

    listObj () {
        let obj = {}
        const vars = this.my.lists
        const keys = Object.keys(vars)
        for (let i = 0; i < keys.length; i++) {
            const varData = vars[keys[i]]
            obj[varData[0]] = varData[1]
            obj[varData[0]].push(Object.keys(obj).length)
            obj[varData[0]].push(keys[i])
        }
        return obj
    }

    get boardcasts () {
        return this.my.boardcasts
    }
}

class Stage {
    constructor (project) {
        this.stage = new Target(project, 0)
    }

    get vars () {
        return this.stage.vars
    }

    get lists () {
        return this.stage.lists
    }

    async varObj () {
        const arr = await this.stage.varObj()
        return arr
    }

    async listObj () {
        const arr = await this.stage.listObj()
        return arr
    }

    get boardcasts () {
        return this.stage.boardcasts
    }
}

export default SB3
export { Target, Stage }
