import { Config, WizardConfig } from "../types/Config"
import * as _goggles from "./goggles"
import * as _radios from "./radios"
import * as _drones from "./drones"
import { existsSync } from "fs"

const goggles = Object.values(_goggles) as Config[]
const radios = Object.values(_radios) as Config[]
const drones = Object.values(_drones) as Config[]

const fileExists = (path: string) => {
    return existsSync(path)
}

for (const config of goggles) {
    for (const article of config.articles) {
        const path = `app/${article}`
        if (!fileExists(path)) {
            throw new Error(`File ${path} does not exist`)
        }
    }
    for (const flag of config.flags) {
        for (const article of flag.articles) {
            const path = `app/${article}`
            if (!fileExists(path)) {
                throw new Error(`File ${path} does not exist`)
            }
        }
    }
}

for (const config of radios) {
    for (const article of config.articles) {
        const path = `app/${article}`
        if (!fileExists(path)) {
            throw new Error(`File ${path} does not exist`)
        }
    }
    for (const flag of config.flags) {
        for (const article of flag.articles) {
            const path = `app/${article}`
            if (!fileExists(path)) {
                throw new Error(`File ${path} does not exist`)
            }
        }
    }
}

for (const config of drones) {
    for (const article of config.articles) {
        const path = `app/${article}`
        if (!fileExists(path)) {
            throw new Error(`File ${path} does not exist`)
        }
    }
    for (const flag of config.flags) {
        for (const article of flag.articles) {
            const path = `app/${article}`
            if (!fileExists(path)) {
                throw new Error(`File ${path} does not exist`)
            }
        }
    }
}

export default {
    goggles,
    radios,
    drones,
} satisfies WizardConfig