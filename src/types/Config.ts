export type ConfigFlag = {
    name: string,
    articles: string[]
}

export type ConfigOption = {
    name: string,
    choices: ConfigFlag[],
}

export type Config = {
    name: string,
    articles: string[],
    flags: ConfigFlag[],
    options: ConfigOption[],
}

export type WizardConfig = {
    goggles: Config[],
    drones: Config[],
    radios: Config[],
}