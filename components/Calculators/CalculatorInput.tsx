import { Box, Input } from "@mui/joy"

export type CalculatorInputProps = {
    label: string
    value: number
    setter: (v: number) => void
    unit: string
}

export const CalculatorInput = (props: CalculatorInputProps) => {
    const label = <Box width="15em"><b>{props.label}:</b></Box>;
    const input = <Input value={props.value} placeholder={props.label} onChange={(v) => props.setter(Number(v.target.value))} />
    const unit = <Box marginLeft="1em">{props.unit}</Box>
    return [
        label,
        input,
        unit,
    ];
}