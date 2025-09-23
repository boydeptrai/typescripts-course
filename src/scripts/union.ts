const information: (string | number | boolean)[] = [
  "badminton",
  "soccer",
  "tennis",
  100,
  false,
];

const students: {
  name?: string;
  age?: number;
  scores?: number | string;
  extra?: { name: string } | { school: string };
}[] = [
  {
    name: " thu hang",
    age: 28,
    scores: 50,
    extra: {
      name: "tuanpro",
      school: "MT",
    },
  },
  {
    name: " thu hang",
    age: 28,
    scores: "10",
    extra: {
      school: "AB",
      name: "demo",
    },
  },
];
