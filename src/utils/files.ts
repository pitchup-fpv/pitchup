import { statSync } from "fs";

export const isDir = (path: string) => {
    return statSync(path).isDirectory()
}
