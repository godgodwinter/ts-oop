// constrains mengakses option dari dalam generic function

// untuk menampilkan beberapa options yang terdapat di generic

// function generic25<T>(arg: T): T { //arg= argument atau parameter
//     console.log(arg.length); // tidak bisa menggunakan length karena param tidak diketahjui tipe datanya

//     return arg;
// }


interface length {
    length: number;
}

function generic25<T extends length>(arg: T): T { //punya option length
    console.log(arg.length); //muncul length karena di extends
    // tetapi type data akan menjadi string saja
    return arg; //

}

const gen25 = generic25("test123")

console.log(gen25);

const gen25b = generic25({ length: 10, value: 200 }); //isi/input object length secara menual agar value dapat diisi menjadi number