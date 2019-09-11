/** 
 * ALGORITMA
 * 
 * 1. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
 * 2. Tampilkan bilangan yang paling sering tampil dalam satu deret bilangan
 * 3. Jika dalam deret bilangan menampilkan angka yang sama maka itu sama dengan -1
 * 4. Jika modus tidak ditemukan makan akan me return - 1
 * 
 */

function cariModus(arr) {
    // you can only write your code here!
    var list = []

    for (var i = 0; i < arr.length; i++) {
        var isFind = false
        for (var j = 0; j < list.length; j++) {
            if (arr[i] === list[j][0]) {
                isFind === true
                list[j][1]++
            }
        }
        if (isFind === false) {
            list.push([arr[i], 1])
        }
    }

    var max = list[0]
    for (var i = 0; i < list.length; i++) {
        if (max[1] < list[i][1]) {
            max = list[i]
        }
    }

    if (max[1] === 1 || max[1] === arr.length) {
        return -1
    }

    return max[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1