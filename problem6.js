// 1st germs er power = 21
// 2nd gems er power = 32;
// 3rd germs er power = 43;
// sob friend mile  mot koto ti diamond pabe seta ber korte hobe ,, diamond er songkha jodi 1000 er digun hoy, tahle total diamond theke 2000 bad diye obosistho joto gulo thakbe toto gulo amra pabo ,,,,,

// convert your gems into diamond 

function germsToDiamond(x,y,z){
    if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
        return "please provide a valid number!"
    }
    else if(x < 0 || y < 0 || z < 0){
        return "please provide me all positive numbers!"
    }
    else if(x % 1 !== 0 || y % 1 !== 0 || z % 1 !== 0){
        return "please provide integer number!"
    }
    else{
        const frnd1 = 21;
        const frnd2 = 32;
        const frnd3 =43;
        // total newar jnoo 
        const total = (x * frnd1) + (y * frnd2) + ( z * frnd3);
        if(total > 2000){
            return total - 2000;
        }
        else{
            return total;
        }
    }
}
// console.log(germsToDiamond(20, 200, 50));
console.log(germsToDiamond(100, -5, 1));