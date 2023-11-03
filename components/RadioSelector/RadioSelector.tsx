"use client"

import { FC } from "react";
import { DeviceSelector } from "../DeviceSelector/DeviceSelector";
import { Config } from "@/src/types/Config";
import { useWizardStore } from "@/src/stores/wizard";
import useHasMounted from "@/src/hooks/useHasMounted";


export type RadioSelectorProps = {
    configs: Config[]
}

export const RadioSelector: FC<RadioSelectorProps> = ({ configs }) => {
    const { 
        radioModel, 
        radioFlags, 
        radioOptions,
        setRadioModel, 
        setRadioFlags,
        setRadioOptions, 
    } = useWizardStore(state => state);

    const mounted = useHasMounted();

    const onChange = (device: string | null, flags: Record<number, boolean>, options: Record<number, number>) => {
        setRadioModel(device);
        setRadioFlags(flags);
        setRadioOptions(options);
    }

    if (!mounted) {
        return null;
    }

    return (
        <div>
            <DeviceSelector configs={configs} device={radioModel} flags={radioFlags} options={radioOptions} onChange={onChange} />
        </div>
    )
}