// Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;

for (i = 0; i < numbersArray.length; i++) 
{  
    sum = sum + numbersArray[i];
}

document.write("The sum is: " + sum);