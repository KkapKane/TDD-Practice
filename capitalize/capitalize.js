

function capitalize(string){
    if (string == ''){
        return 'empty string'
    }
    var string = string.replace(/[0-9]/g, '');
    console.log(string[0].toUpperCase() + string.slice(1));
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;