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
        return JSON.parse(Zip.getFile(dbp, "project.json").async("string"))
    },
    extensionStorage: {
        all: (dbp) => {
            const project = JSON.parse(Zip.getFile(dbp, "project.json").async("string"))
            return project.extensionStorage
        },
        getExtension: (dbp, ext) => {
            const project = JSON.parse(Zip.getFile(dbp, "project.json").async("string"))
            return project.extensionStorage[ext]
        },
        get: (dbp, ext, key) => {
            const project = JSON.parse(Zip.getFile(dbp, "project.json").async("string"))
            return project.extensionStorage[ext][key]
        },
        set: (dbp, ext, key, value) => {
            let project = JSON.parse(Zip.getFile(dbp, "project.json").async("string"))
            project.extensionStorage[ext][key] = value
            Zip.setFile(dbp, "project.json", JSON.stringify(project))
        },
        setExtension: (dbp, ext, value) => {
            if (typeof value === 'object') {
                let project = JSON.parse(Zip.getFile(dbp, "project.json").async("string"))
                project.extensionStorage[ext] = value
                Zip.setFile(dbp, "project.json", JSON.stringify(project))
            } else {
                console.error("type of value is not an object")
            }
        }
    }
}

export default dbp