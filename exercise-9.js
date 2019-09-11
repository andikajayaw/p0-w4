function checkAB(num) {
    // you can only write your code here!
    var a = []
    var b = []

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            a.push(i)
        } else if (num[i] === 'b') {
            b.push(i)
        }
    }

    var jarak = []
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            jarak.push(Math.abs(a[i] - b[j]))
        }
    }

    for (var i = 0; i < jarak.length; i++) {
        if (jarak[i] === 4) {
            return true
        }
    }

    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false