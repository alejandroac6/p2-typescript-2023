import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadCharacters } from "./users.js";

const Characters = await loadCharacters(10);
const html = render(Characters);
await writeFile('users.html', html);

