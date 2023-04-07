
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
      name_location: string;
      url_location: string;
    }
  ){}
}

export class User {
  constructor(
    public gender: "male" | "female",
    public name: {
      title: "Mr" | "Mrs";
      first: string;
      last: string;
    },
    public location: {
      street: string;
      city: string;
      state: string;
      country: string;
      postcode: number;
    },
    public login: {
      username: string;
      password: string;
    },
    public email: string,
    public picture: {
      large: string;
      medium: string;
      thumbnail: string;
    }
  ) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

const range= (n)=>{
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

  result.forEach(person => {
    const {name,status,species,gender,origin,location,image}=person
    world_Characters.push(new Character(name,status,species,gender,origin,location,image))
  });

  return world_Characters
}

export const loadUsers = async (n: number) => {
  const response = await fetch(`https://randomuser.me/api?results=${n}`);

  const { results } = (await response.json()) as { results: any[] };
  console.log(results)
  const users: Array<User> = [];
  for (const { gender, name, location, login, email, picture } of results) {
    users.push(new User(gender, name, location, login, email, picture));
  }

  return users;
};

// loadUsers(3)
loadCharacters(5)

// console.log(range(5))