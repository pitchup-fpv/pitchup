import { Config } from "@/src/types/Config";

export const config = {
    name: "Skyzone SKY04X V2",
    articles: [
        "/goggles/skyzone/sky04xv2",
    ],
    flags: [
        {
            name: "with IRC Rapidfire Module",
            articles: [
                "/goggles/immersionrc/rapidfire-module"
            ],
        },
        {
            name: "with TBS Fusion",
            articles: [
                "/goggles/hdzero/tbs-fusion"
            ]
        }
    ],
    options: []
} satisfies Config
