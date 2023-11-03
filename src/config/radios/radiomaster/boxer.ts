import { Config } from "@/src/types/Config";

export const config = {
    name: "Radiomaster Boxer",
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
                    name: "4in1",
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