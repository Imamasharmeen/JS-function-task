function make_avg(array, size) {
    
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    let avg = sum / size;
    return avg;
}


let array = [10, 20, 30, 40, 50]; 
let size = array.length; 

let average = make_avg(array, size);
console.log("The average of the array is: " + average);
