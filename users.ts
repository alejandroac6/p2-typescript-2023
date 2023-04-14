
export class Character{
  constructor(
    public name:string,
    public status:string,
    public species:string,
    public gender:string,
    public origin:{
      name_origin:string
      url_origin:string
    },
    public image:string,
    public location:{
      name_location: string
      url_location: string
      type_location:string
      dimension_location:string
    },
    public html:string="/",
  ){}
}


const range= (n:number)=>{
  let i = 0
  let list=[]
  while (i<n) {
    i++
    list.push(i)
  }

  return list
}

export const loadCharacters = async(n:number)=>{

  const list=range(n)
  const url=`https://rickandmortyapi.com/api/character/${list}`


  const response=await fetch(url);
  const result=await response.json()

  const world_Characters: Array <Character> =[];

  for (const person of result) {
    // Creamos la persona, extrayendo de la API los campos que necesitamos
    const {name,status,species,gender,origin,location,image}=person


    //Dentro de la URL de current location buscamos la info de type_dimension y de dimension_location, la guardamos dentro de location

    let url_location:String=location.url;

    if (!url_location) {
      url_location="https://rickandmortyapi.com/api/location/3"     
    }
    const response_location= await fetch(url_location);
    const result_location= await response_location.json();

    const {type,dimension}=result_location
   
    
    // asignamos valores
    location.type_location=type
    location.dimension=dimension
    
    //asignamos ruta html
    const array_name:Array<string>= name.split(' ')
    const name_html:string=array_name.join('')
    const html=`/${name_html}`

    world_Characters.push(new Character(name,status,species,gender,origin,image,location,html))
   
    
  }

  return world_Characters
}