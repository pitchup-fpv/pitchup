import { Config } from "@/src/types/Config";

export const config = {
    name: "Happymodel Mobula6",
    articles: [],
    flags: [],
    options: [
        {
            name: "Video Transmitter",
            choices: [
                {
                    name: "ELRS Analog",
                    articles: [
                        "/drones/happymodel/mobula6-elrs-analog",
                    ],
                },
                {
                    name: "HDZero",
                    articles: [
                        "/drones/happymodel/mobula6-hdzero"
                    ]
                }
            ]
        }
    ]
} satisfies Config