// MATERI TAMBAHAN ==== sebenarnya tidak ada hubungan dengan OOP;
// generic menjadikan sebuah function menjadi tipe data yang lebih  dinamis

function getData(value: any) {
    return value;
}

const data1 = getData(123);
console.log(data1); // jika menggunakan any,,,ketika di ctrl + space tidak muncul option pilihan yang dimiliki (contoh string punya .length dll)


// ---------------------- Menggunakan Generic
function getData2<T>(value: T) {  //T == Type / Generic Type
    return value;
}

const data2 = getData2<string>("test");  //Type diisi string maka ketika di ctrl+ space akan ada pilihan method string seperti split replace dll
console.log(data2.length);

const data3 = getData2<number>(123.4123);  // contoh number memiliki toFixed dll
console.log(data3.toFixed(2));


