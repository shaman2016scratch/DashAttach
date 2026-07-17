import Zip from "../help/zip.js"
import info from "./information.js"

const dbp = {
    init: (id) => {
        let dbp = Zip.generate()
        const dbpBuffer = await info.projects.buffer.dbp(id)
        dbp = Zip.loadFromBuffer(dbp, dbpBuffer)
        return dbp
    },
    load: (buffer) => {
        let dbp = Zip.generate()
        dbp = Zip.loadFromBuffer(dbp, buffer)
        return dbp
    }
}

export default dbp