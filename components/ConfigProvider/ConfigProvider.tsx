"use client"

import { WizardConfig } from "@/src/types/Config";
import React, { FC, createContext } from "react";

export const ConfigContext = createContext<WizardConfig>({} as WizardConfig);

export type ConfigProviderProps = {
    children: React.ReactNode
    config: WizardConfig
}

export const ConfigProvider: FC<ConfigProviderProps> = ({ config, children }) => {
    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    )
}