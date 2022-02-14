//closure is a function along with its lexical scope 

function x(){
    var n = 7
    function z(){
        console.log(n)
    }
    return z
}
// there is not only z function was return its return a closure with value of n

n = 9
console.log(n)
x()()