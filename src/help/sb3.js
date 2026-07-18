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
}

class Target {
    constructor (project, number) {
        this.#project = project
        this.#index = number
        this.#projectData = new SB3(this.#project)
        this.targets = this.#projectData.targets
    }

    get isStage () {
        return this.targets[this.#index].isStage
    }

    get name () {
        return this.targets[this.index].name
    }

    get vars () {
        return this.targets[this.#index].variables
    }

    get lists () {
        return this.targets[this.#index].lists
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