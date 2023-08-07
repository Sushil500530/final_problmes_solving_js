// use function.. input hisebe akti je kono array nibe.. jodi negative number hoy tahle badData return korbe...r jodi positive number hoy tahle goodData return korbe... 
function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "Please provide a valid an array of number!"
    }
    else{
        let badData = 0;
        for(let data of arr){
            // console.log(data)
            if(typeof data !== 'number'){
                return "please provide a valid number!";
            }
            else{
                if(data < 0){
                    badData++;
                }
            }
        }
        // for(let i = 0; i < arr.length; i++){
        //     let element = arr[i];
        //     // console.log(element)
        //     if( typeof element !== 'number'){
        //         return "please provide a valid number!"
        //     }
        //     else{
        //         if(element < 0){
        //             badData ++;
        //         }
        //     }
        // }
        return badData;
    }
}
const arri = [15, 54, -51, 10, -21, 52]
// const array = [2, -5, -7, -13]
// const array = [1, 2, 5]
console.log(findingBadData(arri))
// console.log(findingBadData(array))