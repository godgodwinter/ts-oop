// 3. PROPERTI
// pada sebuah class harus ada sebuah sifat dan perilaku dari class tersebut.
class Hewan3 {
    // property
    nama: string = '';
    kaki: number = 2;
    mamalia: boolean = false;
    // method / perilaku / function
    bernafas() {
        console.log(`${this.nama} sedang bernafas`);

    }
}

const hewan3 = new Hewan3();
console.log(hewan3);


hewan3.nama = 'katak';
hewan3.kaki = 4;
hewan3.mamalia = false;

console.log(hewan3);

hewan3.bernafas();
