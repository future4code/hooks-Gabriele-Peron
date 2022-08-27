export type User = {
  id:number,
  name:string,
  age: number
  account:number
}

export let users: User[]=[
  {
    id: Math.random(),
    name: "Maria",
    age: 65,
    account: 563
  },

  {
    id: Math.random(),
    name: "João",
    age: 45,
    account: 5223
  },

  {
    id: Math.random(),
    name: "Matheus",
    age: 25,
    account: 5443
  }


]