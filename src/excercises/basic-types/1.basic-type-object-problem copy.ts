export type User = unknown;
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

export function logPerson(user: unknown){
    console.log(`- ${user.name}, ${user.age}`);
}