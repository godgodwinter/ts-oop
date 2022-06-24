//VISIBILITY atau access modifier yang digunakan untuk mengatur dan membatasi akses pada metod / property yang ada pada sebuah class
// a. public /bisa dipanggil dari mana saja
// b. protected /hanya bisa di gunakan pada class itu sendiri dan class turunannya
// c. private /bisa dipanggil pada class itu sendiri


class Hewan8 {
    nama: string = '';
    bernafast() { //(#A)
        console.log('Sedang bernafas!');

    }
}

class Katak8 extends Hewan8 {
    bernafast(): void {
        console.log('Malas bernafas!');

    }
}

const katak8 = new Katak8();
katak8.bernafast();