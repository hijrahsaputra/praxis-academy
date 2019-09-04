function sebuahFungsi() {
    console.log("Latihan Penggunaan Function");
    twoParams('1','2');
    function twoParams(param1,param2) {
        console.log("Function with two params " + param1 + ' and ' + param2);
        console.log(fungsiReturn(3));
        function fungsiReturn(num) {
            return num * 2;
        }
    }
}
sebuahFungsi();