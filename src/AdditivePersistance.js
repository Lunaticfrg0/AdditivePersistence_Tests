const getAdditivePersistance = function(numberToAnalize){
    let number = String(numberToAnalize);
    let sortedArray = number.split('');
    let count = 0;
    while(sortedArray.length > 1){
        sortedArray = String(sortedArray.reduce(function(a, b){
            return parseInt(a)+parseInt(b)
        })).split('');
        count++;
    }
    return count;
}
module.exports = getAdditivePersistance;