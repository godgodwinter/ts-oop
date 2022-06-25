// Readonly dalam sebuah Interface (Immutable)

interface Student {
    readonly name: string;
    readonly age: number;
}
// karena read only hanya bisa diisi sekali
let student: Student = { name: "Babeng ", age: 20 };
console.log(student);
