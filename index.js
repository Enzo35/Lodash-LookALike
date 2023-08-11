class _ {
    // The chunk method divides the content of an array into groups
    static chunk(arr, size=1){
        let newArr = [];
        for(let i = 0; i < arr.length; i += size){
            let chunk = arr.slice(i, i + size);
            newArr.push(chunk);
        }
        return newArr
    }
    // The compact method returns all non-falsy elements of an array
    static compact(arr){
        let newArr = arr.filter(val => {return Boolean(val) === true});
        return newArr
    }
    // The concat method returns a concatenated array of two or more arrays
    static concat(arr, ...otherVals){
        let newArr = [...arr];
        for(let i = 0; i < otherVals.length; i++){
            newArr = newArr.concat(otherVals[i]);
        }
        return newArr
    }
    // The drop method returns an array with some of its elements dropped from the left
    static drop(arr, val=1){
        return arr.slice(val, arr.length)
    }
    // The dropRight method is the same as drop but it drops elements from the rigth of array
    static dropRight(arr, val=1){
        return arr.slice(0, -val)
    }
    // The fill method fills an array with a specific value
    static fill(arr, val, start=0, end=arr.length){
        let newArr = [...arr];
        for(let i = start; i < end; i++){
            newArr[i] = val;
        }
        return newArr
    }
    // 
}

let arr = ['sss','dddd','sssss',0];

console.log(_.fill(arr, 2));

console.log(arr)