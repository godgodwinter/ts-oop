//Abstract class = sebuah class yang tidak bisa diinstansiasi langsung oleh client ,bentuknya belum jelas/abstrack
// atau sperti sebuah template dimana sebuah class yang mengextendnya harus mengimplementasikan metod yang sudah ditentukan oleh si Abstack class ini

// aturanya pada abstrac kelas ini harus ada 1 abstrac metod;

abstract class Hewan13 {
    nama: string;

    constructor(nama: string) {
        this.nama = nama;
    }
    makan(): void {
        console.log(`${this.nama} sedang makan`);

    }

    // wajib ada 1 atau lebih abstrack class atau klas yang kelas anaknya implementasinya berbeda-beda
    abstract bergerak(): void; //seperti interface misal bergerak datanya belum jelas
}



class Kucing13 extends Hewan13 {
    constructor() {
        super("kucing")
    }

    bergerak(): void {
        console.log("Kucing berjalan");
    }
}


class Burung13 extends Hewan13 {
    constructor() {
        super("burung")
    }

    bergerak(): void {
        console.log("Burung Terbang");
    }
}


const kucing13 = new Kucing13();
kucing13.bergerak();
const burung13 = new Burung13();
burung13.bergerak();