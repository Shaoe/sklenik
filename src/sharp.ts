import sharp from "sharp";
import fs from "fs";
const directory = "./src/assets/2023";

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(1980, 1320, { fit: "inside" })
    .withMetadata() // width, height
    .toFile(`${directory}/small/${file}`);
});
