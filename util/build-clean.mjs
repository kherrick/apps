import { rm } from "fs/promises";

await rm("./dist", { recursive: true, force: true })
