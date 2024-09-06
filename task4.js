function count_zero(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]=== '0'){
            sum +=1;
        }
        //need to use'' because of binary string.
    }
    return sum;
    
}
 

let count = count_zero("12334000221110");
console.log("The count of '0' is: " + count);