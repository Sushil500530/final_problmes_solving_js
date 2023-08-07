// akti function nibo,,, er moddhe 2 ti parameter thakbe..akti photoname r oper ti imageExtainsion,,, amar kaj holo jodi function ti sompurno  kora, jate function er maddhome porikha kora jay sobir name,,Extainsion thik ki na...jodi thik thake tahle true return korbe...tthik na hole false return korbe.......
function isValidPhotoName(photoName,imageExtainsion){
    if(typeof photoName !== "string" || (!Array.isArray(imageExtainsion))){
        return "Please provide a valid image name inputs"
    } 
    else{
        for(let element of imageExtainsion){
            if(photoName.toLowerCase().endsWith(element.toLowerCase())){
                return true;
            }
        }
        return false;
    }
}

const photo ="image.mpg";
const extainsions = ['.jpg','.JPEG','.png', '.gif','avif','.ico'];
console.log(isValidPhotoName(photo, extainsions))