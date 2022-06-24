// INHERITANCE = pewarisan adalah  konsep dimana sebuah class bisa menurunkan property / method pada kelas yang mengextend nya.
// atau biasa disebut parrent and child inheritance.
// sifat / perilaku parren bisa diturunkan ke anaknya

class Hewan5 {
    nama: string = '';
    kaki: number = 2;

    bernafas() {
        console.log('bernafas!');
    }
}


class Burung5 extends Hewan5 {
    warna: string = "merah";

}

const burung5 = new Burung5();
burung5.nama = "kenari";
burung5.kaki = 4;
burung5.warna = 'biru';


console.log(burung5);

// burung5.bernafas();