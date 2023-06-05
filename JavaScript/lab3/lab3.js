import {
    fib
} from './lab2.js';
export function getDecimal(num) {
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }

    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(2);
    }
}



export function ucFirst(str) {
    if (!str) {
        return str;
    }
    else {
        return str[0].toUpperCase() + str.slice(1);
    }
}



export function checkSpam(str) {
    let newstr = str.toLowerCase();
    return newstr.includes('viagra') || newstr.includes('xxx');
}



export function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    }
    else {
        return str.slice(0, maxlength - 1) + '…';
    }
}



export function  camelize(str){
    let str_copy = str.split("-");
    let strnew = "";
    for (let i = 0; i <= str_copy.length - 1; i++) {
        if (i == 0) strnew = str_copy[0];
        else strnew += ucFirst(str_copy[i]);
    }
    return strnew;
}
export function fibs(n){  
        let mas=[];
        for(let i=0;i<n; i+=1){
          mas.push(fib(i));
        }
        return mas;
}
export function  arrReverseSorted(arr){
    let arr_copy=arr;
    return arr_copy.sort(function (a, b) {
        return b - a;
    })
}
  export function unique(arr){
    return Array.from(new Set(arr));
  }