export function fibs(num){
    if(num <= 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0, 1];

    let arr = [0, 1];

    for(let i = 2; i < num; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

export function fibsRec(num){
    if(num <= 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0, 1];

    let arr = [0, 1];

    const recur = function(n, arr){
        if(n == num){
            return arr;
        }else{
            arr.push(arr[n - 1] + arr[n - 2]);
            return recur(n + 1, arr);
        }
    }

    arr = recur(2, arr);

    return arr;
}