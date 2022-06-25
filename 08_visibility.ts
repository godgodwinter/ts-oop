//VISIBILITY atau access modifier yang digunakan untuk mengatur dan membatasi akses pada metod / property yang ada pada sebuah class
// a. public /bisa dipanggil dari mana saja
// b. protected /hanya bisa di gunakan pada class itu sendiri dan class turunannya
// c. private /bisa dipanggil pada class itu sendiri


class Hewan8 {
    public nama: string;
    private kaki: number;
    protected mamalia: boolean;

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }

    berjalan() {

    }
}

class Katak8 extends Hewan8 {
    private umurTelur: number = 4;  // hanya bisa diakses disini,, bahkah tidak bisa dipanggil dari luar,, intinya disembunyikan dari client.
    private umurKecebong: number = 2;
    private umurKatak: number = 20;


    getUmur() {
        console.log(this.umurKatak);
        this.umurKatak;
    }
}


const katak8 = new Katak8("Tes", 12, false);
katak8.getUmur();
console.log(katak8);


