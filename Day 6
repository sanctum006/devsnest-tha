//Question 1
const is_array = (arr) => {
    if (toString.call(arr) === "[object Array]")
        return true;
    return false;   
};


//Question 2
const array_Clone = function(arr) {
   return arr.slice(0);
};
  
//Question 3
const func =  (arr, n) => {
    if (arr == null)
        return void 0;
    if (n == null)
        return arr[0];
    if (n < 0)
        return [];
    return arr.slice(0, n);
};

//Question 4
function to_string(arr,n=1) {
    let clone = arr.join()
    let clone2 = arr.join("+")
    console.log(clone,'\n',clone2)
}

//Question 5
const freq = (arr) => {
    var a = {};
    
    for (var x in arr)
    {
        if (arr[x] in a)
        {
            a[arr[x]] += 1;
        } else {
            a[arr[x]] = 1;
        }
    }

    var maxcount = 0;
    var key = 0;
    for (y in a)
    {
        if (a[y] >= maxcount)
        {
            maxcount = a[y];
            key = y;
        }
    }
    
    console.log(key, "(" + maxcount + " times)");
}

freq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
