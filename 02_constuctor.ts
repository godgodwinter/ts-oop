//1. class adalah blueprint atau kerangka untuk membuat sebuah objek
// didalamnya menyimpan beberapa sifat dan perilaku dari objek tersebut yang dinamakan property dan method.

// 2. constuctor adalah metod yang akan dipanggil terlebih dahulu ketika object dibuat menggunakan class
class Hewan2 {
    constructor() {
        console.log('Ini constructor dan akan di panggil terlebih dahalu dari pada yang lain ketika class ini dijalankan');

    }
}

const kodok2 = new Hewan2();
const kodok3 = new Hewan2();
console.log(typeof kodok2);
console.log(typeof kodok3);
