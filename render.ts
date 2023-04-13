import { Character } from "./users.js";

const head = (title: string) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick and Morty - Characters</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;700&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet">
    <style>

      a {
        text-decoration: none;
        color: black;
        
      }

      html, body {
          height: 100%;
          margin: 0;

          }
      .container-logo{
          background-image: url(https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-and-morty-adult-swim-cartoon-wallpapers-22.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center top 0rem;
          height: 25rem;
          position: relative;
      }

      .container-logo p{
          font-size: large;
          color: #ddd;
          font: bold;
          font-family: 'Kanit';
          font-weight: bold;
      }

      .header-logo{
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }

      .galactic-logo{
          display: flex;
          flex-direction: column;
          align-items: center;
      }

      .galactic-logo > p{
          margin-top: -0.25rem;
      }

      .galactic-logo img{
          border-radius: 50%;
          width: 5rem;
      }

      .contenedor-personajes{

          position: relative;
          background-image: linear-gradient(to bottom, rgb(30, 1, 49), rgb(18, 0, 20));
          background-size: cover;
          background-repeat: no-repeat;

          display: grid;
          grid-template-columns: repeat(3,1fr);
      }

      body {
        margin: 0;
        padding: 0;
      }
      .user {
        font-family: 'Kanit';
        margin: 3rem;
        padding: 1rem;
        width: 25rem;
        height: 10rem;
        display: flex;
        flex-direction: row;
        cursor: pointer;
        background-color: rgb(49, 164, 231);
        border-radius: 1rem;
        padding: 0.5rem;
        transition: background-color 0.75s ease;

      }
      .user-Alive:hover{
          background-color: aquamarine;            
      }

      .user-Dead:hover{
          background-color: rgb(231, 69, 69); 

      }
      .personaje-foto img{
          width: 11rem;
        border-radius: 1rem 0 0 1rem ;
        margin-right: 0.7rem;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
      }
      
      .status{
          display: flex;
          flex-direction: row;
          align-items: center;
      }

      .status-Alive{
          height: 0.5rem;
          width: 0.5rem;
          margin-right: 0.375rem;
          background: rgb(85, 204, 68);
          border-radius: 50%;
          animation: changeColor-alive 2s infinite;
      }
      @keyframes changeColor-alive{
          0%, 50% {
          background-color:  rgb(85, 204, 68);   
      }
          51%, 100% {
          background-color: rgb(34, 78, 29);
      }
      }
      .status-Dead{
          height: 0.5rem;
          width: 0.5rem;
          margin-right: 0.375rem;
          background: rgb(149, 15, 15);
          border-radius: 50%;
          animation: changeColor-dead 2s infinite;
      }
      @keyframes changeColor-dead{
          0%, 50% {
          background-color: #ff0000; 
      }
          51%, 100% {
          background-color:  rgb(149, 15, 15); 
      }
      }
      .location span{
          font-weight: bold;
      }
      .user .name {
        font-weight: bold;
        font-size: x-large;
      }
      .user .email {
        font-family: monospace;
      }
    </style>
</head>`;

const renderCharacter = (world_Characters: Array<Character>) => {
  let html = "";
  for (const Character of world_Characters) {
    html += `
    <div class="user user-${Character.status}">
      <div class="personaje-foto">
          <img src=${Character.image} />
      </div>

      <div class="personaje-descripcion">
          <a class="name" href="${Character.html}.html">${Character.name}</a>
          <div class="species">${Character.species}</div>
          <div class="status"> <span class="status-${Character.status}"></span> ${Character.status}</div>
          <div class="location"><span>Location: </span>${Character.location.name_location}</div> 
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
    <header>
      <div class="container-logo">
        <div class="header-logo">
          <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" width="600" alt="Rick and Morty Logo" />

          <div class="galactic-logo">
            <p>Galactic Federation</p>
            <p>WANTED - Dead or Alive</p>
            <img src="federacion_galactica.png" alt="Imagen federacion galactica">
          </div>
        </div>          
      </div>
    </header>

    <main>
      <div class="contenedor-personajes">
        ${renderCharacter(world_Characters)}

      </div>
    </main>
    
  </body>
</html>`;
};
