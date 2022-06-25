// variable bisa menggunakan data Type
// variable juga bisa menggunakan data Interface

type UserType = {
    name: string;
}

interface UserInterface {
    name: string;
}

class user1 implements UserType { //bisa menggunakan interface dan type
    name: string = "User 1";
}
class user2 implements UserInterface {
    name: string = "User 1";
}

// INTERFACE
// 1. Interface hanya bisa memakai object TYPE,,contoh tidak bisa ,, interface Phone:string ; //tetapi harus bertipe object
// 2. Interface bisa di merge , ex:
interface Dinosaurus {
    name: string
}
interface Dinosaurus {
    weight: number;
}

class Dino implements Dinosaurus {
    name: string = "TRex";
    weight: number = 4000;
}

const trex1 = new Dino();
// console.log(trex1); //hilangkan remark untuk menampilkan

// 3. bisa implement dan extends class dengan mudah
// 4. -

//gunakan INTERFACE == jika ingin membuat sebuah objek baru / metod dari sebuah class


//====================================================================
//====================================================================
//====================================================================
// TYPE
// 1. tidak harus object , bisa langsung variable example : type Phone:string ;
// 2. tidak bisa di merge
// 3. tidak bisa extend class
// 4 type bisa semacam merge tapi namanya intersection ex:

// gunakan TYPE jika ingin membuat variable / function
type Name = {
    name: string
}
type Age = {
    age: number
}
type Employe1 = Name & Age

const employe: Employe1 = {
    name: "test",
    age: 42
};
console.log(employe);

type Employe2 = Name | Age //bisa diisi salah  satu
const employe2: Employe2 = {
    // name: "test",
    age: 42
};
console.log(employe2);





