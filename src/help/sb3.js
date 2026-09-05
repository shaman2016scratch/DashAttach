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

    get extensions () {
        return this.project.extensions
    }

    get extensionURLs () {
        return this.project.extensionURLs
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

    get blocks () {
        return this.my.blocks
    }

    block (id) {
        return this.my.blocks[id]
    }

    blockClass (id) {
        return new Block(id, this.index, this.project)
    }

    get comments () {
        return this.my.comments
    }

    get currentCostume () {
        return this.my.currentCostume
    }

    get costumes () {
        return this.my.costumes
    }

    get sounds () {
        return this.my.sounds
    }

    get volume () {
        return this.my.volume
    }

    get visible () {
        return this.my.visible
    }

    get pos () {
        return [ this.my.x, this.my.y ]
    }

    get size () {
        return this.my.size
    }

    get direction () {
        return this.my.direction
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

    get blocks () {
        return this.stage.blocks
    }

    block (id) {
        return this.stage.block(id)
    }

    blockClass (id) {
        return this.stage.blockClass(id)
    }

    get comments () {
        return this.stage.comments
    }

    get currentCostume () {
        return this.stage.currentCostume
    }

    get costumes () {
        return this.stage.costumes
    }

    get sounds () {
        return this.stage.sounds
    }

    get volume () {
        return this.stage.volume
    }
}

class Block {
    constructor (id, target, project) {
        this.target = new Target(target, project)
        this.project = project
        this.id = id
        this.targetId = target
        this.stage = new Stage(project)
        this.my = this.target.blocks[id]
    }

    get opcode () {
        return this.my.opcode
    }

    get nextBlock () {
        return this.my.next
    }

    get parentBlock () {
        return this.my.parent
    }

    get fields () {
        return this.my.fields
    }

    get inputs () {
        return this.my.inputs
    }

    get shadow () {
        return this.my.shadow
    }

    get topLevel () {
        return this.my.topLevel
    }

    get pos () {
        return [ this.my.x, this.my.y ]
    }
}

export default SB3
export { Target, Stage, Block }
