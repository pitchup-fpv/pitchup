import { Config } from "@/src/types/Config";

export const pocket = {
    name: "Radiomaster Pocket",
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
        }
    ],
} satisfies Config