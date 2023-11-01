import { Heading } from "@/components/Heading/Heading"
import { Box } from "@mui/joy"
import Link from "next/link"


const DocsIndex = () => {

    return <Box>
        <Heading level="h1">Pitchup Documentation</Heading>
        <Box>
            <Heading level="h2">
                <Link href="/docs/user-guide">
                    User Guide
                </Link>
            </Heading>
            <Box>
                This page will help you use Pitchup to find guides for your gear.
            </Box>
        </Box>
        <Box>
            <Heading level="h2">
                <Link href="/docs/adding-guides">
                    Adding Guides
                </Link>
            </Heading>
            <Box>
                Want to add a guide? This page will help you do that.
            </Box>
        </Box>
        <Box>
            <Heading level="h2">
                <Link href="/docs/adding-gear">
                    Adding New Gear to the Pitchup Wizard
                </Link>
            </Heading>
            <Box>
                Want to add a new piece of gear to the wizard? This page will help you do that.
            </Box>
        </Box>
        <Box>
            <Heading level="h2">
                <Link href="/docs/using-github">
                    Using Github to add Guides and Gear to Pitchup
                </Link>
            </Heading>
            <Box>
                Not sure how to use Github? This page will help you do that.
            </Box>
        </Box>
        <Box>
            <Heading level="h2">
                <Link href="/docs/using-git">
                    Using Git to add Guides and Gear to Pitchup
                </Link>
            </Heading>
            <Box>
                Handy with the command line? This page will help you use Git to add guides and gear to Pitchup.
            </Box>
        </Box>
    </Box >
}

export default DocsIndex