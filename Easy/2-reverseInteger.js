//Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = ""
    let multiplicador = 1
    let arr = String(x).split("")
    if(arr[0] === '-') {
      arr = arr.slice(1)
      multiplicador = -1
    }
    for(let i = arr.length-1; i >= 0; i--){
        res += arr[i]
    }
     if (res > 2**31) return 0;
    return res * multiplicador
};