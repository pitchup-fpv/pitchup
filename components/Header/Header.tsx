import { Box, Typography } from "@mui/joy"
import Image from "next/image"
import { FC } from "react"
import quadlogo from "@/public/quadlogo.png";
import Link from "next/link";
import { Heading } from "../Heading/Heading";

export const Header: FC = () => {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        padding: ".2em"
    }}>
        <Link href="/">
            <Box display="flex" flexDirection="row" alignItems="center">
                <Image src={quadlogo} alt="Quadcopter logo" width={100} />
                <Heading>Pitchup</Heading>
            </Box>
        </Link>
    </div>
}