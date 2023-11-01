import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Box } from "@mui/joy"
import Link from "next/link"
import { faFileCircleQuestion, faHatWizard } from "@fortawesome/free-solid-svg-icons"


export const HeaderMenu = () => {
    return <Box className="header-menu">
        <Box className="header-item">
            <Link href="/">
                <FontAwesomeIcon icon={faHatWizard} />
            </Link>
        </Box>
        
        <Box className="header-item">
            <Link href="/docs">
                <FontAwesomeIcon icon={faFileCircleQuestion} />
            </Link>
        </Box>
        
        <Box className="header-item">
            <Link href="https://discord.gg/thefpvhub">
                <FontAwesomeIcon icon={faDiscord} />
            </Link>
        </Box>

        <Box className="header-item">
            <Link href="https://github.com/pitchup-fpv/pitchup">
                <FontAwesomeIcon icon={faGithub} />
            </Link>
        </Box>
    </Box>
}