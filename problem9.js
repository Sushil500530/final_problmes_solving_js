// recursive function bebohar kore n-th tomo poder jogfol nirnoy
function sumOfN(n){
    if(n === 1){
        return 1;
    }
    else{
        return n + sumOfN(n -1);
    }
}
const number = 5;
console.log(sumOfN(number))