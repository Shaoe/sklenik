import sharp from "sharp";
import fs from "fs";
const directory = "./src/assets/2023/small";

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize( {height:100, fit: "outside" })
    .withMetadata() // width, height
    .toFile(`${directory}/thumbnail/${file}`);
});
