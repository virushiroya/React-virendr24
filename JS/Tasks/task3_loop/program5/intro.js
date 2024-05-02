// Iterate through all numbers from 1 to 45.
// Print the following:
//   ● For multiples of 3 print “Fizz”
//   ● For multiples of 5 print “Buzz”
//   ● For multiples of 3 and 5 print “FizzBuzz”


let i = 1
let n = 45

for (i; i <= n; i++)
{
    if (i % 3 == 0) 
    {
        
        document.write("Fizz" + " ");

    }

    else if (i % 5 == 0)
    {
        
        document.write("Buzz" + " ");

    }

    else if (i % 3 == 0 && i % 5 == 0) 
    {
        
        document.write("FizzBuzz" + " ");
    }

    else
    {

        document.write(i + " ");
    }

}

