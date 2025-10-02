type User = {
    id: number;
    name: {
        first: string;
        last: string;
    };
};
// 
const newUser = {
    id: 1,
    name: {
        first: "tran",
        last: "tuan",
    }
} satisfies User;

// const routes: Record<string, any> = {
//   "/": "homepage",
//   "/about": "About page",
//   "/dashboard": " Dashboard page",

// }
// satisfies
const routes = {
      "/": "homepage",
  "/about": "About page",
  "/dashboard": " Dashboard page",

} satisfies Record<string, any>;
console.log(routes["/about"]);