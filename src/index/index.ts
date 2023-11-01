
// take in `root` path
// recursively find all `page.mdx` files
// read the frontmatter
// return a map of relative path -> frontmatter

import { readFileSync, readdirSync } from "fs";
import { basename, dirname, join, relative } from "path";
import matter from "gray-matter";
import { isDir } from "../utils/files";
import { inspect } from "util";
const getTitle = require("get-title-markdown");

function extractFirstLevelOneHeader(input: string): string | null {
    const match = input.match(/^#\s(.*)$/m);
    return match ? match[1] : null;
}

// relative path shouldn't contain `root` or `page.mdx`
export const findPages = (originalRoot: string): Record<string, any> => {
    const pages = {} as Record<string, any>;

    const findPagesRecursive = (root: string) => {
        const files = readdirSync(root);
        for (const file of files) {
            const path = join(root, file);
            if (isDir(path)) {
                findPagesRecursive(path);
            } else if (file === "page.mdx") {
                const content = readFileSync(path, "utf8");
                const { data } = matter(content);
                const title = extractFirstLevelOneHeader(content);
                const relativePath = "/" + dirname(relative(originalRoot, path))
                pages[relativePath] = {
                    ...data,
                    title,
                }
            }
        }
    };

    findPagesRecursive(originalRoot);

    return pages;
}