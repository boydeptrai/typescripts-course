
type User = {
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    },
    {
        name: "Kate Muller",
        age: 23,
        role: "Administrator",
    },
     {
    name: "jane Doe",
    age: 25,
    occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 28,
        role: "World saver",
    },
    
];
export  function logPerson(user:Person) {
    console.log(`- ${user.name}, ${user.age} ${user.role}`);
}