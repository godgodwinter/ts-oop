// interface lebih ke objeck
// type lebih ke variable biasa

type Generic2<T> = T;

function genericFn2<T>(value: T): Generic2<T> {
    return value;
}

console.log(genericFn2<string>("Testing"));
console.log(genericFn2<number>(123));
console.log(genericFn2<boolean>(false));