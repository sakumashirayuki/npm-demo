module.exports = {
    add(a ,b){
        return a + b;
    },
    module(a, b){
        return a * b; 
    },
    init({option, params}){
        console.log("execute init process!", option, params);
    }
};