function caesarCipher(text){
    let temparr = [];
let split = text.split('');
for(let i = 0; i< split.length; i++){
    if(split[i] == ' '){
        temparr.push(split[i].charCodeAt(0))
    }
if(split[i] !== ' '){
    temparr.push(split[i].charCodeAt(0) - 1)
}

}
 const newArr = CharToString(temparr)
 return newArr.join('')
}



function CharToString(array){
    let final = [];
    for(let i = 0 ; i < array.length; i++){
        final.push(String.fromCharCode(array[i]))
    }
 
    return final;
}


caesarCipher('hello')
module.exports = caesarCipher;