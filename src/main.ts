import './style.css'

const language: string = "javascript";

const score: number = 100;

const isAvailable: boolean = false;

// Ternary operator
const text: string = language === "javascript" ?  "weird": "awesome";


let keyboard: any;
keyboard = "tuantran";
keyboard = 100;
keyboard = false;

let bottle: undefined = undefined;
let mouse: null = null;

let study: unknown;
study = "typescript"

if (typeof study === "string"){
  study.split("");
}

function sum (a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}

sum("5", "10"); // 0

sum(5, 10); // 0

function calculate(): never {
  while (true) {
    console.log("infinite");
  }
}
