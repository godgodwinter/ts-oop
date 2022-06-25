// interface = sebuah perjanjian atau contrak , dimana semua property atau metod yang sudah disepakati didalam interface harus diimplementasi kan dalam semua klass 
// yang menggunakan interface tersebut

interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

class Samsung implements AndroidPhone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    menu(): void {
        console.log("menu tapped");

    }
    home(): void {
        console.log("home tapped");

    }
    back(): void {
        console.log("back tapped");

    }

}

const samsung1 = new Samsung("samsung a13");
console.log(samsung1);


class GameA {
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
        this.phone = phone;
    }

    back() {
        console.log("Kembali halaman utama game!");
    }
    menu() {
        this.phone.menu(); // mengakses menu pada hape nya bukan pada gamenya
    }

    home() {
        this.phone.home(); // mengakses home pada hape nya bukan pada gamenya
    }
}

const game = new GameA(samsung1);
// console.log(game);
game.back();
game.menu();
game.home();

interface ApplePhone {
    home(): void;
}

class IPhone implements ApplePhone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    home() {
        console.log("Home Iphone");
    }
}


const Iphone = new IPhone("IPhone SE");

// const game2 = new GameA(IPhone); //ERROR karena game A disepakati hanya untuk hp android
