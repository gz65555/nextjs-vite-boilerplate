import { nextBuild } from "next/dist/cli/next-build.js"
import { build } from "vite"
import { fileURLToPath } from 'node:url'
import path from "node:path"

const __dirname = fileURLToPath(new URL('.', import.meta.url))

await build({
  root: path.resolve(__dirname, "..", "frontend"),
  base: "/frontend/",
  mode: "production",
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, "..", "public", "frontend"),
  },
})

nextBuild({debug: false});