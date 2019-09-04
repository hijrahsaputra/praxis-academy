function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");

  //Error : function egg() {} Maximum call stack size exceeded