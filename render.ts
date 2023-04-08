import { Character } from "./users.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .user {
      font-family: sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    .user img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .user .name {
      font-weight: bold;
    }
    .user .email {
      font-family: monospace;
    }
  </style>
</head>`;

const renderCharacter = (world_Characters: Array<Character>) => {
  let html = "";
  for (const Character of world_Characters) {
    html += `<div class="user">
      <img src="${Character.image}" />
      <div class="data">
        <div class="name">${Character.name}</div>
        <div class="email">${Character.location.name}</div>
      </div>
    </div>`;
  }
  return html;
}

export const render = (world_Characters: Array<Character>) => {
  return `
<html>
  ${head("Character List")}
  <body>
    ${renderCharacter(world_Characters)}
  </body>
</html>`;
};
