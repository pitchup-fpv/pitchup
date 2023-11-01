import { Typography } from "@mui/joy"
import { FC } from "react"

export type HeadingProps = {
    level?: "h1" | "h2" | "h3" | "h4"
    children: React.ReactNode
}

export const Heading: FC<HeadingProps> = ({ level: size, children }) => {
    return <Typography level={size ?? "h1"} marginLeft={".5em"}>
        {children}
    </Typography>
}