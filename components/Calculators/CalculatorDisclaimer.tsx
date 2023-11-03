import { Box } from "@mui/joy";
import { FC } from "react";

export type CalculatorDisclaimerProps = {
    children: React.ReactNode
}

export const CalculatorDisclaimer: FC<CalculatorDisclaimerProps> = ({children}) => {
    return <Box display="flex" flexDirection="column" alignItems="center" className="inverted" borderRadius="5px" padding="1em">
        <Box>Disclaimer</Box>
        {children}
    </Box>;
}