"use client"

import React, { FC, createContext } from "react";

export const IndexContext = createContext<Record<string, any>>({});

export type IndexProviderProps = {
    children: React.ReactNode
    index: Record<string, any>
}

export const IndexProvider: FC<IndexProviderProps> = ({ index, children }) => {
    return (
        <IndexContext.Provider value={index}>
            {children}
        </IndexContext.Provider>
    )
}