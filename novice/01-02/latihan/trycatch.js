console.log("Latihan Percabangan TRY...CATCH..THROW");
console.log("------------------------------");
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Silakan memilih bulan (1..12) : ? ", (answer) => {
    function getMonthName(mo) {
        mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (months[mo]) {
            return months[mo];
        } else {
            throw 'InvalidMonthNo'; //throw keyword is used here
        }
    }

    try { // statements to try
        monthName = getMonthName(myMonth); // function could throw exception
    }
    catch (e) {
        monthName = 'unknown';
        logMyErrors(e); // pass exception object to error handler -> your own function
    }

    switch (answer) {
        case '1':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '2':
            console.log('Apples are $0.32 a pound.');
            break;
        case '3':
            console.log('Bananas are $0.48 a pound.');
            break;
        case '4':
            console.log('Cherries are $3.00 a pound.');
            break;
        case '5':
            console.log('Mangoes are $0.56 a pound.');
            break;
        case '6':
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;
        default:
            console.log('Sorry, we are out of ' + answer + '.');
    }
    console.log("Is there anything else you'd like?");
    r1.close();
});

