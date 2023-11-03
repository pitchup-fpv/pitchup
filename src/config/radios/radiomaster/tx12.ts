import { Config } from "@/src/types/Config";

export const config = {
    name: "Radiomaster TX12",
    articles: [],
    flags: [],
    options: [
        {
            name: "Transmitter",
            choices: [
                {
                    name: "ELRS",
                    articles: [],
                },
                {
                    name: "CC2500",
                    articles: [],
                }
            ]
        },
        {
            name: "Region",
            choices: [
                {
                    name: "FCC",
                    articles: [],
                },
                {
                    name: "LBT",
                    articles: [],
                }
            ]
        }
    ],
} satisfies Config