function palindrome(str) {
    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));