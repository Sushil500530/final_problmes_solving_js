// function use kore akta number nite hobe ,, jodi number t purno songkha(interger) hoy tahle true return korbe,,,,integer na hole false return korbe 
function isInteger(number){
    if(typeof number !== "number"){
        return "please provide a number!"
    }
    else{
        if(number % 1 === 0){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isInteger('ljk'))

