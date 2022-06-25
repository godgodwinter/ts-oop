// getter dipakai untuk mengambil
// setter dipakai untuk mengisi sebuah property dalam class;

// dimana sebelum melakukan get dan set ada sebuah proses yang perlu dilakukan terlebih dahulu sebelum disimpan dalam property nya ,ex: validasi;

class ProdukA {
    private _price: number = 0;
    private discount: number = 0.05;


    get price() {
        return this._price;
    }

    set price(value: number) {
        this._price = value - (value * this.discount);
    }
}

const produkA = new ProdukA();
produkA.price = 4000;
console.log(produkA.price);

