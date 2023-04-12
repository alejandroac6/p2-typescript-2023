import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { renderSingleCharacter } from "./Render_Single_Character.js";
import { loadCharacters, Character } from "./users.js";

const Characters = await loadCharacters(10);
const SingleCharacter_html=async (Characters:Array<Character>)=>{
    for (const SingleCharacter of Characters) {
        const html_Single=renderSingleCharacter(SingleCharacter)
        await writeFile(`${SingleCharacter.html}`,html_Single)
    }
}
const html = render(Characters);
await writeFile('users.html', html);

