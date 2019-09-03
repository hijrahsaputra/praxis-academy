var prompt = require('prompt');
var prompt_attributes = [
    {
        name: 'a',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai a harus berbentuk angka'
    },
    {
        name: 'b',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai b harus berbentuk angka'
    },
    {
        name: 'c',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai c harus berbentuk angka'
    },
    {
        name: 'd',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai d harus berbentuk angka'
    },
    {
        name: 'e',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai e harus berbentuk angka'
    }
];

prompt.start();
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        console.log('Hasil :');
        var a1 = result.a;
        var b1 = result.b;
        var c1 = result.c;
        var d1 = result.d;
        var e1 = result.e;
        if (a1 > b1 && a1 > c1 && a1 > d1 && a1 > e1) {
            console.log(a1);
        }
        else if (b1 > a1 && b1 > c1 && b1 > d1 && b1 > e1) {
            console.log(b1);
        }
        else if (c1 > a1 && c1 > b1 && c1 > d1 && c1 > e1) {
            console.log(c1);
        }
        else if (d1 > a1 && d1 > c1 && d1 > b1 && d1 > e1) {
            console.log(d1);
        }
        else {
            console.log(e1);
        }
    }
});
