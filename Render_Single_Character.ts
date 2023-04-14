import { Character } from "./users.js";
const head = () => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;700&family=Roboto+Mono:wght@100&display=swap" rel="stylesheet">
    <title>Galactic Federation-Report</title>

    <style>
        html, body {
            height: 100%;
            margin: 0;
            }
        .layout{
            background-image: linear-gradient(to bottom, rgb(30, 1, 49), rgb(18, 0, 20));
            background-size: cover;
            background-repeat: no-repeat;
            height: 100%;
            padding: 1rem;
            padding-top: 5rem;
        }

        .character-container{
            background-color:aliceblue;
            outline-width: 1rem;
            outline-style: double;
            outline-color: aquamarine;
            border-radius: 2rem;
            padding: 1rem;
            box-shadow: 2rem;
            margin: 2rem;
            font-family: 'Kanit';
            font-size: 1.25rem;
        }

        .character-title{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: aquamarine;
            height: 10rem;
            margin: -1rem -1rem 1rem -1rem;
            border-radius: 2rem 2rem 0 0;
        }

        .character-container p{
            font-size: 3.25rem;
            font-weight: bold;
        }
        .federation-img{
            border-radius: 50%;
            width: auto;
            height: 8rem;
            margin-right: 2rem;
        }

        .info-container{
            display: flex;
            flex-direction: row;
        }


        .personaje-foto img{
            border-radius: 1rem;
            width: 15rem;
            margin-right: 1.5rem;

        }


        @media screen and (max-width: 760px ) {
            .character-container p{
                font-size: 2.5rem;

            }
            .federation-img{
                height: 7rem;
                margin-left: 1rem;
            }
        }

        @media screen and (max-width: 600px ) {
            .info-container{
                flex-direction: column;
                align-items: center;
            
            }
            
            .personaje-foto img{
                margin-bottom: 2rem;
                margin-left: 1rem;
            }

            .character-container p{
                font-size: 1.75rem;

            }

            .federation-img{
                height: 6rem;
            }
        }

        .negrita{
            font-weight: bold;
        }

        .status{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .status-Alive{
            height: 0.5rem;
            width: 0.5rem;
            margin-right: 0.5rem;
            background: rgb(85, 204, 68);
            border-radius: 50%;
            animation: changeColor-alive 2s infinite;
        }


        @keyframes changeColor-alive{
            0%, 50% {
            background-color: rgb(34, 78, 29); 
        }
            51%, 100% {
            background-color:  rgb(85, 204, 68); 
        }
        }
        
        .status-Dead{
            height: 0.75rem;
            width: 0.75rem;
            margin-right: 0.5rem;
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
    </style>
</head>`;

// para cada personaje generaremos un html distinto
export const renderSingleCharacter = (SingleCharacter:Character)=>{
    // console.log(SingleCharacter)
    const {image,name,species,status,location}=SingleCharacter

    const name_location:string=location.name
    const type_location:string=location.type_location
    let dimension_location:string=location.dimension

    if (!dimension_location) {
        dimension_location="Undefined"
    }

    return `
    <html>
      ${head()}
        <body>
            <div class="layout">
                <div class="character-container">
                    <div class="character-title">
                        <img class="federation-img" src="/federacion_galactica.png" alt="Imagen de la Federacion Galactica">
                        <p>Galactic Federacion Report</p>
                    </div>
                    <div class="info-container">
                        <div class="personaje-foto">
                            <img src=${image} />
                        </div>

                        <div class="personaje-descripcion">
                            <div class="name"><span class="negrita">Name: </span>${name}</div>
                            <div class="species"><span class="negrita">Species: </span>${species}</div>
                            <div class="status"> <span class="status-${status}"></span> ${status}</div>
                            <div class="location"><span class="negrita">Location: </span>${name_location} - ${type_location}</div> 
                            <div class="dimension"><span class="negrita">Dimension: </span>${dimension_location}</div> 
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`

}