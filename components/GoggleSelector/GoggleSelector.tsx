"use client"


import { FC, useState } from "react";
import { DeviceSelector } from "../DeviceSelector/DeviceSelector";
import { Config } from "@/src/types/Config";
import { useStore } from "@/src/store";
import useHasMounted from "@/src/hooks/useHasMounted";


export type GoggleSelectorProps = {
    configs: Config[]
}

export const GoggleSelector: FC<GoggleSelectorProps> = ({ configs }) => {
    const { 
        goggleModel, 
        goggleFlags, 
        goggleOptions,
        setGoggleModel, 
        setGoggleFlags,
        setGoggleOptions 
    } = useStore(state => state);
    
    const mounted = useHasMounted();
    console.log("wtf?", goggleModel, mounted);
    const onChange = (device: string | null, flags: Record<number, boolean>) => {
        setGoggleModel(device);
        setGoggleFlags(flags);
        setGoggleOptions(goggleOptions);
    }

    if (!mounted) {
        return null;
    }

    return (
        <div>
            <DeviceSelector configs={configs} device={goggleModel} flags={goggleFlags} options={goggleOptions} onChange={onChange} />
        </div>
    )
}