interface Generic<T> {
    propA: T
}

function genericFn<T>(value: T): Generic<T> {
    let data: Generic<T> = {
        propA: value
    };
    return data;
}

console.log(genericFn<string>("Testing"));
console.log(genericFn<number>(123));
console.log(genericFn<boolean>(false));