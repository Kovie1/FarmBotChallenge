function calc(array,size, subArrayLength){
    let currentMax = 0, currentSum = 0,result = 0; 
    for (let i = 0; i < size; i++) 
    {
        currentSum = currentSum + array[i];
        if(i >= subArrayLength-1){
            if (currentMax < currentSum){ // did it increase the current max?
            currentMax = currentSum;// update current max
            result = i-subArrayLength+1 // current position - maximum position+1 = window starting position
            } 
            currentSum -=array[i-(subArrayLength-1)]// subtract furthest left element
        }
    }
    return result; 
}

function init(){
    const array = [-2, -3, 4, -1, -2, 1, 5, -3]
    let n = 4
    const result = calc(array, array.length, n)
    console.log("The Maximum SubArray of size", n, "starts at position:", result)
};
init()