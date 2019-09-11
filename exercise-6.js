/** 
 * ALGORITMA
 * 
 * 1. Mencari faktor angka terlebih dahulu
 * 2. Mengurutkan digit yang paling sedikit dari angka yang sudah difaktorisai
 * 
 */

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var result = 0
    var bagi = 0

    for (var i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            result = i
            console.log(i)
        }
    }
    return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2