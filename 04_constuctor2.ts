// example constructor 2
class Hewan4 {
    nama: string; //property #A
    kaki: number;

    constructor(nama: string, kaki: number) { //#B
        this.nama = nama; //this mengacu pada pada class ini , nama yang pertama adalah property di atas (#a) ,  nama yang kedua merefer (#B)
        this.kaki = kaki;
    }
}

// mengisi  parameter
const burung = new Hewan4('burung', 2);

console.log(burung);


// example : lebih simple
// ---------------------
class Hewan41 {
    constructor(public nama: string, public kaki: number) { };
}

const burung41 = new Hewan41('burung41', 2);

console.log(burung41);