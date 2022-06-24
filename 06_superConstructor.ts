// super constructor = digunakan untuk memanggil constructor dari kelas parrennya
// dimana property dari kelas parrent akan diisi melalui dari constructor dari kelas child


class Hewan6 {
    nama: string;
    kaki: number;

    constructor(nama: string, kaki: number) { //(#A)
        this.nama = nama;
        this.kaki = kaki;
    }
}


class Katak6 extends Hewan6 {
    beracun: boolean;

    constructor(nama: string, kaki: number, beracun: boolean,) { //property nama dan kaki di ambil dari property class parrent #A
        super(nama, kaki); //super mengacu pada constructor induknya (#A)
        this.beracun = beracun;
    }
}

const katak6 = new Katak6("Katak", 4, false);

console.log(katak6);
