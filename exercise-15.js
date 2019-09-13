function highestScore(students) {
    // Code disini
    var result = {}


    //for pertama buat bikin kelas
    for (var j = 0; j < students.length; j++) {
        // students[j].class
        result[students[j].class] = {
            name: '',
            score: 0
        }
    }
    // console.log(Object.keys(result))

    for (var i = 0; i < Object.keys(result).length; i++) {
        // console.log(students[i].class)

        for (var j = 0; j < students.length; j++) {
            // console.log(students[j].class)
            // console.log((result[students[j].class]))

            if (students[j].class === Object.keys(result)[i]) {
                // console.log(Object.keys(result))

                if (students[j].score > (result[students[j].class].score)) {
                    // console.log(result[students[j].class].score)

                    result[students[j].class].name = students[j].name
                    result[students[j].class].score = students[j].score
                }
            }
        }
    }

    console.log(result)
}

/** 
 * STUCK 
 * 1. PENTING! Menentukan kondisi dan looping untuk menampilkan nilai tertinggi dari masing2 kelas
 * 2. Test case hanya menampilkan masing - masing 1 data nilai tertinggi dari masing-masing kelas
 * 3. Menempatkan object of object karena outputnya object of object
 * 
 */

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//     foxes: {},
//     wolves: {}
// }

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}