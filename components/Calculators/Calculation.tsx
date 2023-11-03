import { Box } from "@mui/joy"

export type CalculationProps = {
    label: string
    equation: string
    value: number
    unit: string
}

export const Calculation = (props: CalculationProps) => {
    return <>
        <Box>
            <b>{props.label}</b>:</Box>
        <Box textAlign="right">
            <i>{props.equation} =</i>
        </Box>
        <Box>
            {props.value.toString()}{props.unit}
        </Box>
    </>

}