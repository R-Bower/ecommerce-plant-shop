import fs from "fs"
import path from "path"
import sharp from "sharp"

const imageDir = path.resolve(__dirname, "../public/images/plants")

async function main(): Promise<void> {
  const files = fs.readdirSync(imageDir)
  for (const file of files) {
    const input = fs.readFileSync(path.resolve(imageDir, file))
    await sharp(input)
      .resize(800)
      .webp({quality: 95})
      .toFile(path.resolve(imageDir, file.replace(".jpg", ".webp")))
  }
}

if (require.main === module) {
  main()
}
