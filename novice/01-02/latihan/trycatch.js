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
        //logMyErrors(e); // pass exception object to error handler -> your own function
    }

    switch (answer) {
        case '1':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '2':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '3':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '4':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '5':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '6':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '7':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '8':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '9':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '10':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '11':
            console.log('Bulan : ', getMonthName(answer));
            break;
        case '12':
            console.log('Bulan : ', getMonthName(answer));
            break;
        default:
            console.log('Sorry, we are out of ' + answer + '.');
    }
    console.log("Is there anything else you'd like?");
    r1.close();
});

