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
