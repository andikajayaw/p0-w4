/** 
 * ALGORITMA
 * 
 * 1. Membuat variable abjad untuk melakukan pengecekkan terhadap masing2 kata
 * 2. Mengurutkan outputnya sesuai dengan abjad
 * 
 */

function urutkanAbjad(str) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var sort = ''

    for (var i = 0; i < abjad.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j] === abjad[i]) {
                sort = sort + abjad[i]
                console.log(abjad[i])
            }
        }
    }
    return sort
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'