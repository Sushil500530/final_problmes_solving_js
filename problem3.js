// input hisebe akta positive number nibe.. sei number er sathe 3 gun ,, 10 jog... tarpor 2 diye vag.. tarpor 5 diye biyok..agulo return kore 
// function mindGame(number){
//     if(typeof number !== 'number'){
//         return "please provide a valid number!";
//     }
//     else{
//         if( number <= 0){
//             return "please provide a valid number!"
//         }
//         else{
//             const provideNumber = (((number*3) + 10) / 2) -5;
//             return provideNumber;
//         }
//     }
// }
// console.log(mindGame(8));
function otherSide(num){
    if(typeof num !== "number" || num <= 0){
        return "Please provide a valid number!"
    }
    else{
        return ((((num*3) + 10) / 2) -5 );
    }
}
console.log(otherSide('kk'))