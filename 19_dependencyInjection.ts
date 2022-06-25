// dependency Injection katanya semacam design pattern
// dengan adanya interface kita dapat menginjek sebuah class ke dalam class lain secara dinamis

class Store19 {
    private name: string = "Store A ";
    private profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class FashionProduct {
    private store: Store19; //mengambil dari class store19
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        // karena toko nya kita punya 1 maka hanya di muat 1 toko
        this.store = new Store19();
    }

    sell(): void {
        console.log(`${this.name} harga jualanya adalah ${this.store.getProfit() + this.price} `);
    }
}

class TechProduct {
    private store: Store19; //mengambil dari class store19
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        // karena toko nya kita punya 1 maka hanya di muat 1 toko
        this.store = new Store19();
    }

    sell(): void {
        console.log(`${this.name} harga jualanya adalah ${this.store.getProfit() + this.price} `);
    }
}

const baju = new FashionProduct("Baju lengan pamnjang", 50000)

baju.sell();

// -----------------------------------------------
interface IStore {
    name: string;
    profit: number;
    getProfit(): number;
}

class Toko19Lama implements IStore {
    name: string = "Store A ";
    profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}


class Toko19Baru implements IStore {
    name: string = "Store A ";
    profit: number = 2500;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}


class HijabProduct {
    private store: IStore; //mengambil dari class store19
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;
        // karena toko nya kita punya 1 maka hanya di muat 1 toko
        this.store = store; //injection
    }

    sell(): void {
        console.log(`${this.name} harga jualanya adalah ${this.store.getProfit() + this.price} `);
    }
}


class FoodProduct {
    private store: IStore; //mengambil dari class store19
    private name: string;
    private price: number;
    // inject menggunakan class yang mana dari Interface IStore;
    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;
        // karena toko nya kita punya 1 maka hanya di muat 1 toko
        this.store = store; //injection
    }

    sell(): void {
        console.log(`${this.name} harga jualanya adalah ${this.store.getProfit() + this.price} `);
    }
}

const tokoLama = new Toko19Lama();
const tokoBaru = new Toko19Baru();

const hijabBagus = new HijabProduct(tokoLama, "hijab mahal", 80000)
const hijabBagus2 = new HijabProduct(tokoBaru, "hijab mahal", 80000)

// console.log(hijabBagus);
// console.log(hijabBagus2);

hijabBagus.sell()
hijabBagus2.sell()
