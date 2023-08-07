// function use kore akti array theke prime number ber kora 
function isPrimeNumber(arrayNumber){
    if(!Array.isArray(arrayNumber)){
        return "Please valid an array of number!"
    }
    else{
        let number = [];
        for(let item of arrayNumber){
            if(item > 1){
                let element = true;
                for( let i = 2; i < item; i++){ 
                    if(item % i === 0){  
                        console.log('hellow', item)        // i = 2
                        element = false;
                        break;
                    }
                }
                if(element === false){
                    number.push(item);
                }
            }
        }
        return number;
    }

}
const array = [4, 8, 5, 7, 11, 50, 22, 20, 16, 15, 44, 30, 29, 17, 23, 41, 44, 54, 45];
console.log(isPrimeNumber(array))