var a = 4;
function foo(x) {
    var b = a * 4;
    function bar(y) {
        var c = y * b;
        return c;
    }
    return bar(b);
}

console.log(foo(a));
