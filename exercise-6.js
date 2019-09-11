/** 
 * ALGORITMA
 * 
 * 1. Mencari faktor angka terlebih dahulu
 * 2. Mengurutkan digit yang paling sedikit dari angka yang sudah difaktorisai
 * 
 */

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = []

    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            temp.push([i, angka / i])
        }
    }

    var result = 0
    for (var i = 0; i < temp.length; i++) {
        var digit = String(temp[i][0]).length + String(temp[i][1]).length
        if (result === 0) {
            result = digit
        } else if (digit < result) {
            result = digit
        }
    }
    return result
}

// TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2