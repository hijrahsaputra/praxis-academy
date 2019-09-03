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
        if (x1 > 0 && y1 > 0 && z1 > 0) {
            console.log("Tanda +");
        }
        else if (x1 < 0 && y1 < 0 && z1 < 0) {
            console.log("Tanda +");
        }
        else if (x1 > 0 && y1 < 0 && z1 < 0) {
            console.log("Tanda +");
        }
        else if (x1 < 0 && y1 > 0 && z1 < 0) {
            console.log("Tanda +");
        }
        else {
            console.log("Tanda -");
        }
    }
});
