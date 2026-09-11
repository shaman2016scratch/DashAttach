import pkg from "../../package.json" with { type: "json" }
import pkgLock from "../../package-lock.json" with { type: "json" }

const def = {
    ...pkg,
    lock: pkgLock
}

export {
    def as default,
    pkg,
    pkgLock
}