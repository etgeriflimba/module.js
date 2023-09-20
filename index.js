// Jangan lupa tanda () didalam tanda () harus mengisikan objek dari retrun

function pangkatDua(angka){
    return angka * angka
}

function pangkatTiga (angka){
    return angka * angka * angka
}
// kalau mau exports satu module saja, bisa gunakan module.exports= namaModulenya 

// kalau mau export beberpa file dalam satu kali exports,
// gunakan module.exports = {module yang mau di exports, module kedua yang mau di exports}
// commonJS
const nama = "Arthur"
const umur = "20 Tahun"
module.exports = {pangkatDua, pangkatTiga, nama, umur}