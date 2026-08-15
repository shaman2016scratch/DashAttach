import SB3, { Target, Stage } from "../help/sb3.js"
import Zip from "../help/zip.js"
import info from "./information.js"

const dbp = {
    init: async (id) => {
        let dbp = Zip.generate()
        const dbpBuffer = await info.projects.buffer.dbp(id)
        dbp = Zip.loadFromBuffer(dbp, dbpBuffer)
        return dbp
    },
    load: (buffer) => {
        let dbp = Zip.generate()
        dbp = Zip.loadFromBuffer(dbp, buffer)
        return dbp
    },
    json: (dbp) => {
        return JSON.parse(Zip.getFileAsString(dbp, "project.json"))
    },
    extensionStorage: {
        all: (dbp) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            return project.extensionStorage
        },
        getExtension: (dbp, ext) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            return project.extensionStorage[ext]
        },
        get: (dbp, ext, key) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            return project.extensionStorage[ext][key]
        },
        set: (dbp, ext, key, value) => {
            let project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            project.extensionStorage[ext][key] = value
            Zip.setFile(dbp, "project.json", JSON.stringify(project))
        },
        setExtension: (dbp, ext, value) => {
            if (typeof value === 'object') {
                let project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
                project.extensionStorage[ext] = value
                Zip.setFile(dbp, "project.json", JSON.stringify(project))
            } else {
                console.error("type of value is not an object")
            }
        }
    },
    stage: {
        vars: dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            return target.vars
        },
        lists: dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            return target.lists
        },
        varObj: async dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            const arr = await target.varObj()
            return arr
        },
        listObj: async dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            const arr = await target.listObj()
            return arr
        }
    },
    targets: {
        data: async dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            return targets
        },
        list: async dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            const keys = Object.keys()
            return keys
        },
        listData: dbp => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.targets
        }
    },
    target: {
        getByIndex: (dbp, index) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            return new Target(project, index)
        },
        getByName: async (dbp, name) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            return new Target(project, sb3.target(targets[name].indexNum))
        },
        getByObject: async (dbp, obj) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            return new Target(project, sb3.target(targets[obj.name].indexNum))
        }
    },
    meta: {
        vm: (dbp) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.VM
        },
        agent: (dbp) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.UserAgent
        },
        platform: (dbp) => {
            const project = JSON.parse(Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.Platform
        }
    }
}

export default dbp