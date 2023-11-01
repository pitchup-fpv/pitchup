import { Config } from "@/src/types/Config";

export const config = {
    name: "Radiomaster TX16S",
    articles: [
        "/radios/radiomaster/tx16s",
    ],
    flags: [],
    options: [
        {
            name: "Transmitter",
            choices: [
                {
                    name: "with ELRS built-in",
                    articles: [
                        "/radios/radiomaster/tx16s/elrs-built-in",
                    ],
                },
                {
                    name: "ELRS expansion module",
                    articles: [
                        "/radios/radiomaster/tx16s/elrs-expansion-module",
                    ],
                }
            ]
        }
    ],
} satisfies Config