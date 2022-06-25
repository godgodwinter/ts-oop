//readonly  digunakan agar suatu property tidak bisa di ubah datanya atau immutable

class Person9 {
    readonly gender: string = "Laki-laki";


}

const person = new Person9();

// person.gender = "Wanita"; //error karena immutable


// const hanya bisa digunakan pada variable biasa;

//readonly hanya bisa digunakan pada property didalam class
console.log(person);
