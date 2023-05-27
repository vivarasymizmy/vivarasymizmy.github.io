
export function getDecimal(num) {
    return Math.abs(num) % 1;
}



export function ucFirst(str) {
    if (str == null) {
        return '';
    }
    else {
        let NewStr = str[0].toUpperCase() + str.slice(1);
        return NewStr;
    }
}



export function checkSpam(str) {
    let NewStr = str.toLowerCase();
    return NewStr.includes('viagra') || NewStr.includes('xxx');
}



export function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    }
    else {
        return str.slice(0, maxlength - 1) + '…';
    }
}



export function camelize(str) {
    let StrNew = str.split('-');
    for (let i = 0; i <= StrNew.lenght; i++) {
        console.log(StrNew[i]);
    }
    return StrNew.join('');
}
export function fibs(n){  
        let mas=[];
        for(let i=0;i<n; i+=1){
          mas.push(fib(i+1));
        }
        return mas;
}
export function arrReverseSorted(arr){
    arr.sort()
    arr.reverse()
  }
  export function unique(arr){
    return Array.from(new Set(arr));
  }