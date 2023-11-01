"use client"

import { Config } from "@/src/types/Config";
import { Select, Option, Checkbox, Box, Button } from "@mui/joy";
import { FC, useState } from "react";

export type DeviceSelectorProps = {
    configs: Config[];
    device: string | null;
    flags: Record<number, boolean>;
    options: Record<number, number>;
    onChange: (device: string | null, flags: Record<number, boolean>, options: Record<number, number>) => void;
}

export const DeviceSelector: FC<DeviceSelectorProps> = ({ configs, device, flags, options, onChange }) => {
    console.log("DeviceSelector", device);
    // const [_device, setDevice] = useState<string | null>(device);
    // const [_flags, setFlags] = useState<Record<number, boolean>>(flags);
    // const [_options, setOptions] = useState<Record<number, number>>(options);

    const deviceConfig = device === null ? null : configs.find((set) => set.name === device);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Select placeholder="Select a device" value={device} onChange={(e: any, newValue: string | null) => {
                // setDevice(newValue)
                onChange(
                    newValue,
                    {},
                    {},
                )
            }}>
                {configs.map((set, i) =>
                    <Option key={i} value={set.name}>{set.name}</Option>
                )}
            </Select>
            {device !== null && !!deviceConfig && (
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    padding={"1em"}
                >
                    {deviceConfig!.flags.map((flag, i) => {
                        const checked = !!flags[i];
                        return <Box key={i} marginBottom={"1em"}>
                            <Checkbox label={flag.name} checked={checked} onChange={(e) => {
                                const newFlags = {
                                    ...flags,
                                    [i]: e.target.checked
                                } satisfies Record<number, boolean>;
                                // setFlags(newFlags);
                                onChange(device, newFlags, options);
                            }} />
                        </Box>
                    })}
                    {deviceConfig!.options.map((option, i) => {
                        const value = options[i];
                        return <Box key={i} marginBottom={"1em"}>
                            <Select placeholder={option.name} value={value} onChange={(e: any, newValue: number | null) => {
                                const newOptions = {
                                    ...options,
                                    [i]: newValue ?? 0
                                } satisfies Record<number, number>;
                                // setOptions(newOptions);
                                onChange(device, flags, newOptions);
                            }}>
                                {option.choices.map((choice, i) =>
                                    <Option key={i} value={i}>{choice.name}</Option>
                                )}
                            </Select>
                        </Box>
                    })}
                </Box>
            )}
        </div>
    )
}