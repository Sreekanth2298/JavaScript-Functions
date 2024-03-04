function curry(fn){
    let argumentsPassed=[]

   

return function curried(...args){
    argumentsPassed=argumentsPassed.concat(...args)

    if(argumentsPassed.length >= fn.length){
        return fn(...argumentsPassed)
    }else{
        return curried
    }
   }
}
function add(a,b){
    return  a+b;
}


console.log(curry(add)(2)(4));

