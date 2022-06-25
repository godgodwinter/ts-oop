// karena Typescript memeriksa semua penamaan class secara global maka ketika nama class tersebut sudah dipakai di class  
// meskipun di file lain maka tidak akan bisa digunakan

// cara menghindari hal tersebut adalah menggunakan namespace 
// dimana penamaan tiap class di bungkus dalam namespace
namespace NamespaceExample {
    // agar dapat diakses dari luar maka gunakan export
    export class Hewan {

    }

    export const kodok = new Hewan();

}

// untuk mengakses class hewan dari luar namespace
const belalang = new NamespaceExample.Hewan();
let kodok2a = NamespaceExample.kodok;