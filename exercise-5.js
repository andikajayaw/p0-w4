/** 
 * ALGORITMA
 * 
 * 1. Mengubah alphabet dari kata yang disediakan
 * 2. Jika huruf a maka diganti b
 * 3. Loop data untuk mendapatkan data yang ingin dirubah
 * 
 */

function ubahHuruf(kata) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var words = ''

    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < abjad.length; j++) {
            if (kata[i] === abjad[j]) {
                words = words + abjad[j + 1]
            }
        }
    }
    return words
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu