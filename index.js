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
    // The filter method returns an array of elements that satisfies a condition, but doesn't alter the orinal array
    static filter(coll, cond){
        return coll.filter(cond);
    }

    // The find method returns the first element that satifies a condition
    static find(coll, cond, fromIndex=0){
        let newColl = coll.slice(fromIndex, coll.length);
        return newColl.find(cond);
    }

    // The partition method returns an array with two elements, the first is a array with elements that satisfies a condition, the second is an array of elements the didn't
    static partition(coll, cond){
        let truthy = coll.filter(cond);
        let falsy = [...coll];

        for(let i of truthy){
            let n = falsy.indexOf(i);
            falsy.splice(n, 1);
        }
        return [truthy, falsy];
    }

    // The shuffle method returns an shuffled array using the Fisher-Yates shuffle
    static shuffle(coll){
        function fisherYates(arr=[...coll], shuffled=[], length=coll.length){
            if(length === 0){
                return shuffled;
            }

            let rand = Math.floor( Math.random() * (length - 1));
            console.log(rand, length);
            console.log(arr[0]);
            shuffled.push(arr[rand]);

            length -= 1;

            arr.splice(rand, 1);

            return fisherYates(arr, shuffled, length);
        }
        return fisherYates();
    }

        // MATH METHODS
    // The mean method returns the average value of the items in an array
    static mean(arr){
        let sum = arr.reduce((acc, curr) => {return parseInt(acc) + parseInt(curr)}, 0);
        return sum / arr.length;
    }

    // The max method returns the maximum value in an array
    static max(arr){
        return Math.max(...arr);
    }

    // The min method returns the minimum value in an array
    static min(arr){
        return Math.min(...arr);
    }

    // The sum method returns the sum of all values in an array
    static sum(arr){
        return arr.reduce((prev, curr) => {return parseInt(prev) + parseInt(curr)}, 0)
    }

        // OBJECT METHODS
    // 
}

let arr = ['sss','dddd',112,55,'sssss',0, 44, 56];

let arr2 = ['4343','324',112,55,'2322'];

console.log(_.sum(arr2));

console.log(arr)