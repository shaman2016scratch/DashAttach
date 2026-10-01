import pkg from "../../package.json" with { type: "json" }

const pkgLock = {
    name: pkg.name,
    version: pkg.version,
    lockfileVersion: 3,
    requires: true,
    packages: {
        "": {
            name: pkg.name,
            version: pkg.version,
            license: pkg.license,
            dependencies: pkg.dependencies
        }
    }
}

const def = {
    ...pkg,
    lock: pkgLock
}

export {
    def as default,
    pkg,
    pkgLock
}