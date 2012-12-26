function assert(expression) {
    if(!expression) throw "Assert failed!";
}

var cos = Math.cos,
    sin = Math.sin,
    π = Math.PI,
    random = Math.random,
    sqrt = Math.sqrt,
    ln = Math.log;
    abs = Math.abs;
    

Array.prototype.fold = function(sum, f) {
    for(var i = 0; i < this.length; ++i) {
        sum = f(sum, this[i]);
    }
    return sum;
};

var sum = function(sum, x) {return sum + x;};

function generate(N, f) {
    var _ = [];
    for(var i = 0; i < N; ++i) {
        _.push(f(i));
    }
    return _;
}

function identity(_) {
    return _;
}

assert(10 === generate(5,identity).fold(0, sum));
