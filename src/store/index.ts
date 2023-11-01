import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import { WizardConfig } from "../types/Config";

interface Store {
    articles: string[];
    currentArticle: number;
    setArticles: (articles: string[]) => void;
    setCurrentArticle: (article: number) => void;

    droneModel: string | null;
    droneFlags: Record<number, boolean>;
    droneOptions: Record<number, number>;
    setDroneModel: (model: string | null) => void;
    setDroneFlags: (flags: Record<number, boolean>) => void;
    setDroneOptions: (options: Record<number, number>) => void;

    goggleModel: string | null;
    goggleFlags: Record<number, boolean>;
    goggleOptions: Record<number, number>;
    setGoggleModel: (model: string | null) => void;
    setGoggleFlags: (flags: Record<number, boolean>) => void;
    setGoggleOptions: (options: Record<number, number>) => void;

    radioModel: string | null;
    radioFlags: Record<number, boolean>;
    radioOptions: Record<number, number>;
    setRadioModel: (model: string | null) => void;
    setRadioFlags: (flags: Record<number, boolean>) => void;
    setRadioOptions: (options: Record<number, number>) => void;

    calculateArticles: (config: WizardConfig) => string;
}

export const useStore = create<Store>()(persist((set, get) => ({
    articles: [],
    currentArticle: 0,
    setArticles: (articles: string[]) => set({ articles }),
    setCurrentArticle: (article: number) => set({ currentArticle: article }),

    droneModel: null,
    droneFlags: {},
    droneOptions: {},
    setDroneModel: (model: string | null) => set({ 
        droneModel: model,
        droneFlags: {}, 
        droneOptions: {},
    }),
    setDroneFlags: (flags: Record<number, boolean>) => set({ droneFlags: flags }),
    setDroneOptions: (options: Record<number, number>) => set({ droneOptions: options }),

    goggleModel: null,
    goggleFlags: {},
    goggleOptions: {},
    setGoggleModel: (model: string | null) => set({ 
        goggleModel: model,
        goggleFlags: {},
        goggleOptions: {},
    }),
    setGoggleFlags: (flags: Record<number, boolean>) => set({ goggleFlags: flags }),
    setGoggleOptions: (options: Record<number, number>) => set({ goggleOptions: options }),

    radioModel: null,
    radioFlags: {},
    radioOptions: {},
    setRadioModel: (model: string | null) => set({ 
        radioModel: model,
        radioFlags: {},
        radioOptions: {},
    }),
    setRadioFlags: (flags: Record<number, boolean>) => set({ radioFlags: flags }),
    setRadioOptions: (options: Record<number, number>) => set({ radioOptions: options }),

    calculateArticles: (config: WizardConfig) => {
        const { droneModel, droneFlags, droneOptions } = get();
        const { goggleModel, goggleFlags, goggleOptions } = get();
        const { radioModel, radioFlags, radioOptions } = get();

        const articles = [] as string[];

        const { drones, goggles, radios } = config;

        if (droneModel) {
            const drone = drones.find(drone => drone.name === droneModel);
            if (drone) {
                articles.push(...drone.articles);

                for (var i = 0; i < drone.flags.length; i++) {
                    const flag = drone.flags[i];
                    if (droneFlags[i]) {
                        articles.push(...flag.articles);
                    }
                }

                for (var i = 0; i < drone.options.length; i++) {
                    const option = drone.options[i];
                    const choice = option.choices[droneOptions[i]];
                    articles.push(...choice.articles);
                }
            }
        }

        if (goggleModel) {
            const goggle = goggles.find(goggle => goggle.name === goggleModel);
            if (goggle) {
                articles.push(...goggle.articles);

                for (var i = 0; i < goggle.flags.length; i++) {
                    const flag = goggle.flags[i];
                    if (goggleFlags[i]) {
                        articles.push(...flag.articles);
                    }
                }

                for (var i = 0; i < goggle.options.length; i++) {
                    const option = goggle.options[i];
                    const choice = option.choices[goggleOptions[i]];
                    articles.push(...choice.articles);
                }
            }
        }

        if (radioModel) {
            const radio = radios.find(radio => radio.name === radioModel);
            if (radio) {
                articles.push(...radio.articles);

                for (var i = 0; i < radio.flags.length; i++) {
                    const flag = radio.flags[i];
                    if (radioFlags[i]) {
                        articles.push(...flag.articles);
                    }
                }

                for (var i = 0; i < radio.options.length; i++) {
                    const option = radio.options[i];
                    const choice = option.choices[radioOptions[i]];
                    articles.push(...choice.articles);
                }
            }
        }
        console.log(articles);
        set({ articles, currentArticle: -1 });
        return articles[0];
    }
}), {
    name: "pitchup",
    storage: createJSONStorage(() => localStorage),
}));