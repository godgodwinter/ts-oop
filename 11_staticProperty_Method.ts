// static property / method = merupakan property / method yang menempel pada class itu sendiri. dan bukan pada objek yang sudah dihasilkan.

// jika property / method biasa maka perlu diinstansiasikan terlebih dahulu atau bikin objeknya dahulu agar dapat diakses property dan methodnya dengan keyword new;

// tetapi pada static property / method bisa langsung dipanggil saja tanpa perlu membuat terlebih dahulu;


// static bersifat global ,, jadi jika static property diubah maka semua object dalam kelas tersebut mengenai dampak

class Ayam {
    static kaki: number = 2; //nempel pada classnya

    static jalan() { //nempel pada classnya
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`);

    }

    getKaki() { //masuk kedalam objec yang nanti diinisiasikan
        // console.log(this.kaki); //error karena metod bukan statik jika menggunakan this berarti bukak property static
        // untuk mengaksesnya gunakan class nya lalu property staticnya

        console.log(Ayam.kaki);


    }
}


Ayam.jalan();
// Ayam.getKaki(); //eror karena buka static

const ayamku1 = new Ayam;
// console.log();
const ayamku2 = new Ayam;
const ayamku3 = new Ayam;


ayamku1.getKaki();
ayamku2.getKaki();
ayamku3.getKaki();

// static property diubah maka semua terpengaruh
Ayam.kaki = 4;

ayamku1.getKaki();
ayamku2.getKaki();
ayamku3.getKaki();