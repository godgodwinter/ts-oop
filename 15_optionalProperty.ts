// optional proserty pada sebuah interface
// kita dapat mengabaikan property pada property yang sifatnya Optional

interface Teacher {
    name: string;
    age: number;
    phone?: string; //optional boleh tidak diisi;
}

let guru: Teacher = { name: "Babeng", age: 20 };
console.log(guru);
