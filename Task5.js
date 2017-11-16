function mul(tmp){
    var res = 0;
    for(var i = 0; i < arguments.length; i++){
        if((arguments[i]).constructor === Number)
            res += arguments[i];

    }
    return res;
}
console.log(mul(1, 2, 3));

console.log(mul(1,"str", 2, 3, true));
console.log(mul("null", "str", false, true));