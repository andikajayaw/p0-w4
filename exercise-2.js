/** 
 * ALGORITMA
 * 
 * 1. FPB adalah faktor persektutan terbesar
 * 2. FPB itu bilangan bulat yang dapat membagi habis kedua bilangan itu
 * 3. Cara menghitung dengan membandingkan setiap faktor yang sama dan terbesar
 * 4. Cari faktor bilangan yang sama dari setiap daftar faktor, lalu temukan yang terbesar
 * 
 */

function fpb(angka1, angka2) {
    // you can only write your code here!
    var temp = []
    var angkaPertama = []
    var angkaKedua = []


    // Faktor pertama
    for (var i = 0; i < angka1; i++) {
        if (angka1 % i === 0) {
            angkaPertama.push(i)
        }
    }

    // Faktor kedua
    for (var i = 0; i < angka2; i++) {
        if (angka2 % i === 0) {
            angkaKedua.push(i)
        }
    }

    //Mebandingkan angka1 dengan angka2
    for (var i = 0; i < angkaPertama.length; i++) {
        for (var j = 0; j < angkaKedua.length; j++) {
            if (angkaKedua[j] == angkaPertama[i]) {
                temp.push(angkaKedua[j])
            }
        }
    }

    //Mencari Faktor Persekutuan Terbesar
    var result = temp[0]
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] > result) {
            result = temp[i]
        }
    }

    return result

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1