/**
 * ALGORITMA / PSEUDOCODE
 * 
 * Diketahui: 
 * 1. Bilangan prima itu hanya bisa dibagi 2 dan dibagi bilangan itu sendiri
 * 2. Membuat looping untuk membagi nilai yang bisa dibagi oleh nilai itu sendiri
 * 
 * 
 */

function angkaPrima(angka) {
    // you can only write your code here!

    if (angka === 1 || angka === 0) {
        return false
    } else if (angka === 2) {
        return true
    } else {
        for (var i = 2; i < angka; i++) {
            if (angka % i === 0) {
                return false
            }
        }
        return true
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false