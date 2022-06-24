// method OVerriding digunakan untuk mereplace method yang sudah ada pada class parrent nya.

class Hewan7 {
    nama: string = '';
    bernafast() { //(#A)
        console.log('Sedang bernafas!');

    }
}

class Katak7 extends Hewan7 {
    bernafast(): void {     // metod yang sudah ada pada parrent(#A) ganti oleh method child nya
        console.log('Malas bernafas!');

    }
}

const katak7 = new Katak7();
katak7.bernafast();