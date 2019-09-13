/** 
 * ALGORITMA
 * 
 * 1. Membuat object dengan list item yang sudah ditentukan
 * 2. Membeli barang/item termahal terlebih dahulu
 * 3. Jika ada uang masih sisa, diminta untuk membeli item/barang yang SALE masing-masing 1 jika uangnya masih cukup
 * 4. Jika dalam console.log tidak ada member ID atau kosong maka akan menampilkan `Mohon maaf, toko X hanya berlaku untuk member saja`
 * 5. Jika uang kurang dari 50000 maka akan menampilkan `Mohon maaf, uang tidak cukup`
 * 
 */

var items = [{
        name: 'Stacattu',
        price: 1500000,
        type: 'Sepatu'
    },
    {
        name: 'Zoro',
        price: 500000,
        type: 'Baju'
    },
    {
        name: 'H & N',
        price: 250000,
        type: 'Baju'
    },
    {
        name: 'Uniklooh',
        price: 175000,
        type: 'Sweater'
    },
    {
        name: 'Handphone',
        price: 50000,
        type: 'Casing'
    },


]

function shoppingTime(memberId, money) {
    // you can only write your code here!
    var cart = []
    var change = money


    if (memberId === '' || !shoppingTime) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }

    // console.log(items[0].price)
    for (var i = 0; i < items.length; i++) {
        var object = {}
        if (money > items[i].price) {
            // console.log(items[i].name)
            cart.push(items[i].type + " " + items[i].name)
            object.memberId = memberId
            object.money = money
            object.listPurchased = cart
            change = change - items[i].price
            object.changeMoney = change
        }
    }
    return object
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja