import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { renderSingleCharacter } from "./Render_Single_Character.js";
import { loadCharacters, Character } from "./users.js";

const Characters = await loadCharacters(20);

// Single Character recibe un personaje y crea un html especifico, debemos hacer un loop que recorra cada personaje y cree un hmtl
const SingleCharacter_html=async (Characters:Array<Character>)=>{
    for (const SingleCharacter of Characters) {
        const html_Single=renderSingleCharacter(SingleCharacter)

        // Definimos el nombre del html

        const html_name:String = SingleCharacter.html.replace("/","")

        await writeFile(`${html_name}.html`,html_Single)
    }
}

// Primero renderizamos los personajes, despues la lista, que tendra links a los personajes
SingleCharacter_html(Characters);
const html = render(Characters);
await writeFile('users.html', html);

