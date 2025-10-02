// typeof
function checkTypeOf(value: number){
    if (typeof value === "number"){
        return 100 + value;
    }
    return null;
}

checkTypeOf(20);

// in
type A = {
    x: string;
};
type B = {
    y: number;
};

type C = A | B;
function checkInfo(info: C) {
    if ("x" in info){
        console.log(info.x);
    }
    if ("y" in info) {
        console.log(info.y);
    }
}