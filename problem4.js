// function thakbe ,, input hisebe akta number nite hobe ,, parthokko korte hobe ,, parthokko jodi 7 er theke coto hoy tahle return korte hobe tar biyok fol ,,, r jodi number 7  er theke boro hoy tahle digun korte hobe 
function isLGSeven(number){
    if(typeof number !== "number"){
        return "plelase provide a valid number"
    }
    else{
        const lowest = number - 7;
        if(lowest < 7){
            return lowest;
        }
        else{
            return number * 2;
        }
    }
}
console.log(isLGSeven(6))
// function divider(dvn){
//     if()
// }