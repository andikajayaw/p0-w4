function graduates(students) {
    // Code disini
    var result = {}

    for (var i = 0; i < students.length; i++) {

        result[students[i].class] = []

    }
    // console.log((result[students[i].class]))
    // console.log(result)

    for (var i = 0; i < Object.keys(result).length; i++) {
        for (var j = 0; j < students.length; j++) {
            var obj = {}
                // console.log(students[j])
            if (students[j].class === Object.keys(result)[i]) {
                // console.log(Object.keys(result)[i])
                if (students[j].score >= 75) {
                    obj.name = students[j].name
                    obj.score = students[j].score
                    result[students[j].class].push(obj)
                }

            }
        }
    }

    // console.log(result)
    return result
}

// console.log(graduates([{
//         name: 'Dimitri',
//         score: 90,
//         class: 'foxes'
//     },
//     {
//         name: 'Alexei',
//         score: 85,
//         class: 'wolves'
//     },
//     {
//         name: 'Sergei',
//         score: 74,
//         class: 'foxes'
//     },
//     {
//         name: 'Anastasia',
//         score: 78,
//         class: 'wolves'
//     }
// ]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}