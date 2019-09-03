var prompt = require('prompt');
var prompt_attributes = [
    {
        name: 'x',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai x harus berbentuk angka'
    },
    {
        name: 'y',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai y harus berbentuk angka'
    },
    {
        name: 'z',
        validator: /^[-+]?\d*$/,
        warning: 'Nilai z harus berbentuk angka'
    }
];

prompt.start();
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        console.log('Hasil :');
        var x1 = result.x;
        var y1 = result.y;
        var z1 = result.z;
        if (x1 > y1 && x1 > z1) {
            if (y1 > z1) {
                console.log(x1 + ", " + y1 + ", " + z1);
            }
            else {
                console.log(x1 + ", " + z1 + ", " + y1);
            }
        }
        else if (y1 > x1 && y1 > z1) {
            if (x1 > z1) {
                console.log(y1 + ", " + x1 + ", " + z1);
            }
            else {
                console.log(y1 + ", " + z1 + ", " + x1);
            }
        }
        else if (z1 > x1 && z1 > y1) {
            if (x1 > y1) {
                console.log(z1 + ", " + x1 + ", " + y1);
            }
            else {
                console.log(z1 + ", " + y1 + ", " + x1);
            }
        }
    }
});
