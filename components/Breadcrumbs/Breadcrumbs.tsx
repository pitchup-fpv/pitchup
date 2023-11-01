"use client"

import { useStore } from "@/src/store";
import { FC, useContext } from "react";
import { IndexContext } from "../IndexProvider/IndexProvider";
import Link from "next/link";
import { Box, Typography } from "@mui/joy";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import useHasMounted from "@/src/hooks/useHasMounted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";


export const Breadcrumbs: FC = () => {
    const mounted = useHasMounted();

    const currentUrl = usePathname();
    const index = useContext(IndexContext);
    const { articles, setCurrentArticle } = useStore(state => state);
    const currentArticle = articles.indexOf(currentUrl);
    const prevArticle = articles[currentArticle - 1];
    const prevArticleData = index[prevArticle];
    const nextArticle = articles[currentArticle + 1];
    const nextArticleData = index[nextArticle];

    if (!mounted) {
        return null;
    }

    return <Box display="grid" style={{ gridTemplateColumns: "2fr 1fr 2fr" }} alignItems="center">
        <Box flexGrow="1" display="flex" justifyContent="center">
            {prevArticle && <Box display={"flex"} flexDirection="column" alignItems="center">
                <Link onClick={() => setCurrentArticle(Math.max(0, currentArticle - 1))} href={prevArticle}>
                    <Box display="flex">
                        <Box marginRight="1em">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Box>
                        <Box fontStyle="bold">{prevArticleData.title}</Box>
                    </Box>
                </Link>
            </Box>}
        </Box>
        <Box display="flex" justifyContent="center">
            {currentArticle > -1 && <Box display={"flex"} alignItems="center">
                <Link onClick={() => setCurrentArticle(-1)} href="/docket">
                    <Box fontStyle="bold" textAlign="center">
                        <FontAwesomeIcon icon={faHome} />
                    </Box>
                </Link>
            </Box>}
        </Box>
        <Box flexGrow="1" display="flex" justifyContent="center">
            {nextArticle && <Box display="flex" flexDirection="column" alignItems="center">
                <Link href={nextArticle} onClick={() => setCurrentArticle(currentArticle + 1)}>
                    <Box display="flex">
                        <Box fontStyle="bold">{nextArticleData.title}</Box>
                        <Box marginLeft="1em">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Box>
                    </Box>
                </Link>
            </Box>}
        </Box>
    </Box>
}