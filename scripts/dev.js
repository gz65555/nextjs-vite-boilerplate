import { nextDev } from "next/dist/cli/next-dev.js"
import { build } from "vite"
import { fileURLToPath } from 'node:url'
import path from "node:path"

const __dirname = fileURLToPath(new URL('.', import.meta.url))

await build({
  root: path.resolve(__dirname, "..", "frontend"),
  base: "/frontend/",
  mode: "development",
  build: {
    outDir: path.resolve(__dirname, "..", "public", "frontend"),
    watch: true
  },
})

nextDev({
  port: 3000,
}).then(async () => {
  console.log("Server is running on port 3000");
})
