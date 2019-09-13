function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = []

    for (var i = 0; i < arrPenumpang.length; i++) {
        var object = {}

        object.penumpang = arrPenumpang[i][0]
        object.naikDari = arrPenumpang[i][1]
        object.tujuan = arrPenumpang[i][2]


        // jarak antara naik dengan turun * 2000

        var naik = 0
        var tujuan = 0

        for (var i = 0; i < rute.length; i++) {
            // console.log(rute.indexOf('A'))
            // console.log(i)

            if (object.naikDari === rute[i]) {
                naik = i
            } else if (object.tujuan === rute[i]) {
                tujuan = i
            }
        }

        var bayar = Math.abs(naik - tujuan) * 2000

        object.bayar = bayar

        result.push(object)
    }
    return result
        // console.log(bayar)
        // console.log(naik)
        // console.log(tujuan)
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]