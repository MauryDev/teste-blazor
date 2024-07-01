(function () {
    window.myeval = function (bodyscript, that, ...args) {
        // arguments 
        var func = new Function(bodyscript);
        return func.call(that, ...args); 
    }
})();
