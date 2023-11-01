"use client"

import { DroneSelector } from '@/components/DroneSelector/DroneSelector'
import { GoggleSelector } from '@/components/GoggleSelector/GoggleSelector';
import { Heading } from '@/components/Heading/Heading';
import { RadioSelector } from '@/components/RadioSelector/RadioSelector';
import { useStore } from '@/src/store';
import { WizardConfig } from '@/src/types/Config';
import { Box, Button } from '@mui/joy';
import { useRouter } from 'next/navigation';
import { FC, useContext } from 'react';
import { ConfigContext } from '../ConfigProvider/ConfigProvider';
import { ReactElement } from 'react'
import { faCoffee, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type DeviceWizardProps = {
    config: WizardConfig
}

export const DeviceWizard: FC = () => {
    const config = useContext(ConfigContext);
    const { drones, radios, goggles } = config;
    const { setArticles, setDroneModel, setGoggleModel, setRadioModel, calculateArticles } = useStore(state => state);
    const router = useRouter();

    const onPress = () => {
        calculateArticles(config);
        router.push("/docket");
    }

    const reset = () => {
        setDroneModel(null);
        setGoggleModel(null);
        setRadioModel(null);
        setArticles([]);
        router.refresh();
    }

    return (
        <Box flexDirection="column" display="flex">
            <Box display="flex">
                <Box flexGrow={1}>
                    <Heading>Select your gear:</Heading>
                </Box>
                <Box onClick={reset} className="linklike" >
                    <FontAwesomeIcon fontSize="32px" icon={faRecycle} />
                </Box>
            </Box>
            <hr style={{ marginBottom: "1em" }} />
            <Heading level="h2">Drone</Heading>
            <Box padding={"1em"}>
                <DroneSelector configs={drones} />
            </Box>
            <Heading level="h2">Radio</Heading>
            <Box padding={"1em"}>
                <RadioSelector configs={radios} />
            </Box>
            <Heading level="h2">Goggles</Heading>
            <Box padding={"1em"}>
                <GoggleSelector configs={goggles} />
            </Box>
            <Box display="flex" justifyContent={"flex-end"}>
                <Button onClick={onPress}>Get Started</Button>
            </Box>
        </Box>

    )
}
