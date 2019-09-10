/** 
 * ALGORITMA
 * 
 * 1. Median merupakan nilai tengah dari sekolompok bilangan
 * 2. Mencari median dengan mengurutkan kelompok bilangan terlebih dahulu
 * 3. Jika kelompok bilangan lebih banyak ganjil maka `Me = x(n+1)/2`
 * 4. Jika kelompok bilangan lebih banyak genap maka `Me = (x(n/2) + x(n/2+1))/ 2`
 */

function cariMedian(arr) {
    // you can only write your code here!
    var median = 0

    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    } else {
        /** ganjil */
        median = Math.floor(arr[(arr.length - 1) / 2])
    }
    return median
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5