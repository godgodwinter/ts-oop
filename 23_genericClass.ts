interface Generic3<T> {
    propA: T,
    methodA(): T
}

class GenericClass<T> implements Generic3<T>{
    propA: T;

    constructor(prop: T) {
        this.propA = prop;
    }

    methodA(): T {
        return this.propA;
    }
}


const genericClassA = new GenericClass<number>(123);

console.log(genericClassA.methodA());
