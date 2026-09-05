import SB3, { Target, Stage } from "../help/sb3.js"
import Zip from "../help/zip.js"
import info from "./information.js"

const dbp = {
    init: async (id) => {
        let dbp = Zip.generate()
        dbp = await Zip.loadFromURL(dbp, `https://api.dashblocks.org/get-project/${id}`)
        return dbp
    },
    load: async (buffer) => {
        let dbp = Zip.generate()
        dbp = await Zip.loadFromBuffer(dbp, buffer)
        return dbp
    },
    loadUrl: async (url) => {
        let dbp = Zip.generate()
        dbp = await Zip.loadFromURL(dbp, url)
        return dbp
    },
    json: async (dbp) => {
        return JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
    },
    extensionStorage: {
        all: async (dbp) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            return project.extensionStorage
        },
        getExtension: async (dbp, ext) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            return project.extensionStorage[ext]
        },
        get: async (dbp, ext, key) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            return project.extensionStorage[ext][key]
        },
        set: async (dbp, ext, key, value) => {
            let project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            project.extensionStorage[ext][key] = value
            Zip.setFile(dbp, "project.json", JSON.stringify(project))
        },
        setExtension: async (dbp, ext, value) => {
            if (typeof value === 'object') {
                let project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
                project.extensionStorage[ext] = value
                Zip.setFile(dbp, "project.json", JSON.stringify(project))
            } else {
                console.error("type of value is not an object")
            }
        }
    },
    stage: {
        vars: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            return target.vars
        },
        lists: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            return target.lists
        },
        varObj: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            const arr = await target.varObj()
            return arr
        },
        listObj: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const target = new Stage(project)
            const arr = await target.listObj()
            return arr
        }
    },
    targets: {
        data: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            return targets
        },
        list: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            const keys = Object.keys()
            return keys
        },
        listData: async dbp => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.targets
        }
    },
    target: {
        getByIndex: async (dbp, index) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            return new Target(project, index)
        },
        getByName: async (dbp, name) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            return new Target(project, targets[name].indexNum)
        },
        getByObject: async (dbp, obj) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            const targets = await sb3.targetObject()
            return new Target(project, sb3.target(targets[obj.name].indexNum))
        },
        costumeFile: async (dbp, clasS, index) => {
            const costumes = clasS.costumes
            const costume = costumes[index]
            const costumeBuffer = await Zip.getFileAsArrayBuffer(dbp, costume.md5ext)
            return costumeBuffer
        },
        soundFile: async (dbp, clasS, index) => {
            const sounds = clasS.sounds
            const sound = sounds[index]
            const soundBuffer = await Zip.getFileAsArrayBuffer(dbp, sound.md5ext)
            return soundBuffer
        }
    },
    meta: {
        vm: async (dbp) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.VM
        },
        agent: async (dbp) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.UserAgent
        },
        platform: async (dbp) => {
            const project = JSON.parse(await Zip.getFileAsString(dbp, "project.json"))
            const sb3 = new SB3(project)
            return sb3.Platform
        }
    }
}

export default dbp