"use client"

import { IndexContext } from "@/components/IndexProvider/IndexProvider"
import useHasMounted from "@/src/hooks/useHasMounted"
import { useStore } from "@/src/store"
import { Box, Typography } from "@mui/joy"
import Link from "next/link"
import { FC, useContext } from "react"


const Docket: FC = () => {
    const mounted = useHasMounted()
    const index = useContext(IndexContext)
    const { articles } = useStore(state => state)
    if (!mounted) {
        return null
    }
    const items = Object.keys(index)
        .filter(key => articles.includes(key))
        // sort by position in articles array
        .sort((a, b) => articles.indexOf(a) - articles.indexOf(b))
        .map((key, i) => {
            const item = index[key]
            return (
                <Link key={i} href={key}>
                    <Typography level="h2">{item.title}</Typography>
                </Link>
            )
        })
    return <Box display="flex" flexDirection="column">
        {items}
    </Box>
}

export default Docket