"use client"

import { IndexContext } from "@/components/IndexProvider/IndexProvider"
import useHasMounted from "@/src/hooks/useHasMounted"
import { useWizardStore } from "@/src/stores/wizard"
import { Box, Typography } from "@mui/joy"
import Link from "next/link"
import { FC, useContext } from "react"


const CalculatorIndex: FC = () => {
    const mounted = useHasMounted()

    const calculators = [
        ['Charge Speed', 'How fast can you charge your battery?', '/calcs/charge-speed'],
    ]

    const calcs = calculators.map(([name, desc, url], i) => {
        return <Box key={i}>
            <Typography level="h3">
                <Link href={url}>
                    {name}
                </Link>
            </Typography>
            <Typography>
                {desc}
            </Typography>
        </Box>
    })

    return <Box>
        <Typography level="h1">
            Calculators
        </Typography>
        {calcs}        
    </Box>
}

export default CalculatorIndex