// Javascript Array And It's Method

{
    let array = [10 , 50 , 86 , 100 , 0]

    array[0] = 30

    console.log(array);

    let newarray = new array(10 , 70, 300 , 58 , 15)

    console.log(array);

    console.log(newarray);

    console.log(array.length);

    console.log(newarray.length);

    console.log(typeof array);

    console.log(typeof newarray);

}

{
    let array = [20]
    
    let newarray = new array(18)

    console.log(array);

    console.log(newarray);

    console.log(array.length);

    console.log(newarray.length);

}

{
    let array = ["javascript" , 50 , false , undefined , null]

    console.log(array);

    console.log(array.length);

    console.log(array[0]);

    // Array push Method

    array.push("html")
    array.push("css")

    console.log(array);

    // Array unshift Method

    array.unshift("Sass")
    array.unshift("TailwindsCss")

    console.log(array);

    // Array pop Method

    array.pop()
    array.pop()

    console.log(array);

    // Array shift Method

    array.shift()
    array.shift()

    console.log(array);

    // Array toString Method

    let string = array.toString()

    console.log(string);

    // Array reverce Method

    let Reverse = array.reverse()

    console.log(Reverse);

    // Array forEach method

    array.forEach((item) => console.log(item))

    // Array concat Method

    {
        let array1 = [30 , 70 , 100]

        let array2 = [true , false]

        let array3 = ["reactjs" , "nodejs"]

        let newarray = array1.concat(array2 , array3)

        console.log(newarray);
    }

}