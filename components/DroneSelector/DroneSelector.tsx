"use client"

import { FC } from "react";
import { DeviceSelector } from "../DeviceSelector/DeviceSelector";
import { Config } from "@/src/types/Config";
import { useWizardStore } from "@/src/stores/wizard";
import useHasMounted from "@/src/hooks/useHasMounted";


export type DroneSelectorProps = {
    configs: Config[]
}

export const DroneSelector: FC<DroneSelectorProps> = ({ configs }) => {
    const { 
        droneModel, 
        droneFlags, 
        droneOptions,
        setDroneModel, 
        setDroneFlags,
        setDroneOptions 
    } = useWizardStore(state => state);

    const mounted = useHasMounted();

    const onChange = (device: string | null, flags: Record<number, boolean>, options: Record<number, number>) => {
        setDroneModel(device);
        setDroneFlags(flags);
        setDroneOptions(options);
    }

    if (!mounted) {
        return null;
    }

    return (
        <div>
            <DeviceSelector configs={configs} device={droneModel} flags={droneFlags} options={droneOptions} onChange={onChange} />
        </div>
    )
}