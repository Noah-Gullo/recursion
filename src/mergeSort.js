export function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = function(left, right){
    let merged = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            merged.push(left[0]);
            left.splice(0, 1);
        }else{
            merged.push(right[0]);
            right.splice(0, 1);
        }
    }

    return [...merged, ...left, ...right]
}