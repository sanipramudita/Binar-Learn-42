// //perbandingan

// let a = 1
// let b = "1"

// let hasil = a-b
// let hasil2 = a == b

// console.log(hasil);
// console.log(hasil2);

//Waktu
let bulan = ["januari", "Februari", "Maret", "april", "mei", "juni", "July", "Agustus", "September", "oktober", "november", "desember"]
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
let a = new Date()
let date = a.getDate()
let month = a.getMonth()
let year = a.getFullYear()
let day = a.getDay()

console.log(` ${hari[day]} ${date} ${bulan[month]} ${year}`)
// 16 Desember 2023 10:30

