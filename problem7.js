// function use korte hobe ,,, parameter hisebe akta object nite hobe,,,object er property use kore akta meaning full setence toiri korte hobe ,,,,,,,, kono karone nam na thake tahle nai return korbe...thakle seta return korbe...output : amar nam sushil. amar boyos 20. amar email sushil500530@gmail.com. amr bou nai
function printDetails(person){
    if(typeof person !== "object"){
        return "Please provide a valid object!"
    }
    else{
        const name = person.name || 'nai';
        const age = person.age || 'nai';
        const email = person.email || 'nai';
        const bou = person.bou || 'nai'
        return " amar nam "+ name + '.' + "amar boyos " + age + '.' + "amar email " + email + ' ' + "amar bou " + bou + '!';
    }

}
const obj ={
    name: "sushil",
    age : 20,
    email : 'sushil500530@gmail.com'
}
console.log(printDetails(obj))


// else{
//     const name = person.name || "nai";
//     const age = person.age || "nai";
//     const email = person.email || "nai";
//     const bou = person.bou || "nai";
//     return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr bou "+bou;
// }