export type User = {
    name: string,
    age: number,
    occupation: string,
};
export const users: unknown[] = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "chimney sweep",
    },
    {
        name: "Kate Muller",
        age: 26,
        occupation: "Astronaut",
    },
];

export function logPerson(user: User){
    console.log(`- ${user.name}, ${user.age}`);
}