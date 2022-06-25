// return type = berfungsi untuk membatasi return tipe apa yang akan direturn oleh sebuah class

class Burung12 {
    private kaki: number = 2;

    getKaki(): number { //harus memiliki pengembalian dan pengembalian harus tipe number
        return this.kaki;
    }

    doTerbang(): void { //void = tidak mengembalikan nilai
        console.log('Saya terbang');

    }

    async makan(): Promise<string> { //ketika fungsi bertipe asinkronus maka gunakan Promise<Generic>
        return "Makan dulu bos!"
    }

    async makanBerapaKali(): Promise<number> {
        return 4
    }
}