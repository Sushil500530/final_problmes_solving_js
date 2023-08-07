// used function parameter hisebe akta string pathabo... jodi JavaScript File hoy tahle true return korbe..js file na hole false return korbe
function isJavaScriptFile(file){
    if(typeof file !== 'string'){
        return 'please provide a valid file name(string)!'
    }
    else{
        if(file.toLowerCase().endsWith('.js')=== true){
            return true;
        }
        else{
            return false;
        }
    }
  }
  console.log(isJavaScriptFile('52.js'))