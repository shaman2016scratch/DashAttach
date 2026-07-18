class SB3 {
    constructor () {}
}

class Target {
    constructor (project, number) {
        this.#project = project
        this.#index = number
        this.targets = this.#project.targets
    }

    get isStage () {
        return this.targets[this.#number].isStage
    }

    get name () {
        return this.targets[this.#number].name
    }
}

class Stage {
    constructor (project) {
        this.#stage = new Target(project, 0)
    }

    get vars () {
        return this.#stage.variables
    }

    get lists () {
        return this.#stage.lists
    }
}

export default SB3
export { Target, Stage }