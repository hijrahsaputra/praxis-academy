var prompt = require('prompt');
var prompt_attributes = [
    {
        name: 'num1',
        validator: /^\d*$/,
        warning: 'Nilai ke-1 harus berbentuk angka'
    },
    {
        name: 'num2',
        validator: /^\d*$/,
        warning: 'Nilai ke-2 harus berbentuk angka'
    }
];

prompt.start();
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        console.log('Hasil :');
        var n1 = result.num1;
        var n2 = result.num2;
        if (n1 > n2) {
            console.log("Nilai terbesar dari " + n1 + " dan " + n2 + " adalah " + n1);
        }
        else
        if (n2 > n1){
            console.log("Nilai terbesar dari " + n1 + " dan " + n2 + " adalah " + n2);
        }
        else
        {
            console.log("Nilai dari " + n1 + " dan " + n2 + " adalah sama");
        }
    }
});
