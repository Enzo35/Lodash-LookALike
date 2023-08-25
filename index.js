class _ {
        // ARRAY METHODS
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

    // The flatten method returns the array one level deep
    static flatten(arr){
        return [].concat(...arr);
    }

    // The intersection method returns the an array with the same elementes of two array
    // This method only checks the first level of the arraygi
    static intersection(...arrays){
        if (arrays.length === 0){
            return [];
        }

        let newArr = arrays.reduce((prev, curr) => prev.filter((elem) => curr.includes(elem)))
        return [...new Set(newArr)]
    }

    // The remove method returns a array with elements that satifies a condition AND remove those elementes from the original array
    static remove(arr, cond){
        let truthy = arr.filter(cond);
        for(let i of truthy){
            let n = arr.indexOf(i);
            arr.splice(n, 1);
        }
        return truthy;
    }

    // The union method returns a array of unique values between two or more arrays
    static union(arrays){
        let newArr = [];
        for(let i of arrays){
            newArr.push(...i);
        }
        return [...new Set(newArr)];
    }

        // COLLECTION METHODS
    // The filter method returns an array of elements that satisfy a condition, but doesn't alter the orinal array
    static filter(coll, cond){
        return coll.filter(cond);
    }
}

let arr = [['sss','dddd',[112,55]],'sssss',0, 44, 56];

let arr2 = [['sss','aaa',[112,55]],'sssszzs'];

console.log(_.remove(arr, arr2));

console.log(arr)