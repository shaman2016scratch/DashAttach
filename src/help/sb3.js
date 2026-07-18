class SB3 {
    constructor (project) {
        this.#project = project
        this.targets = this.#project.targets
    }

    get extensionStorage () {
        return this.#project.extensionStorage
    }

    target (index) {
        return this.targets[index]
    }

    targetObject () {
        let obj
        for (let i = 0; i < this.targets.length; i++) {
            const targetData = this.target(i)
            obj[targetData.name] = targetData
            obj[targetData.name].indexNum = Object.keys(obj).length
        }
        return obj
    }
}

class Target {
    constructor (project, number) {
        this.#project = project
        this.#index = number
        this.#projectData = new SB3(this.#project)
        this.#my = this.#projectData.target(this.#index)
    }

    get isStage () {
        return this.#my.isStage
    }

    get name () {
        return this.#my.name
    }

    get vars () {
        return this.#my.variables
    }

    get lists () {
        return this.#my.lists
    }
}

class Stage {
    constructor (project) {
        this.#stage = new Target(project, 0)
    }

    get vars () {
        return this.#stage.vars
    }

    get lists () {
        return this.#stage.lists
    }
}

export default SB3
export { Target, Stage }