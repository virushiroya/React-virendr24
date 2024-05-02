// Javascript Array Method

// Shift
// Filter
// Map
// indexof
// lastIndexOf
// slice
// splice
// sort
// copyWithin
// entries()
// keys()
// values()

// fill
// some
// every
// reduce
// reduceRight
// find
// findIndex
// findLastIndex
// include
// Array.isArray
// flat
// flatMap

// Shift method in Array

// {
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]
    
    // console.log(array);

    // array.shift()
    // array.shift()
    // array.shift()

    // console.log(array);
// }

// Filter Method in Array

// {
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // let filter = array.filter((any) => any == "javascript")

    // console.log(filter);

//     let ArrayObject = [

//         {id:1 , item:"mobile" , name:"iphone13" , color:"gray" , price:89000 , discount:"10%" , strorage:"128Gb"},

//         {id:1 , item:"mobile" , name:"iphone13" , color:"white" , price:89000 , discount:"10%" , strorage:"128Gb"},

//         {id:1 , item:"mobile" , name:"iphone14" , color:"gray" , price:89000 , discount:"20%" , strorage:"128Gb"},

//         {id:1 , item:"mobile" , name:"iphone14" , color:"gray" , price:89000 , discount:"20%" , strorage:"128Gb"},

//         {id:1 , item:"mobile" , name:"iphone15" , color:"green" , price:89000 , discount:"20%" , strorage:"128Gb"},

//         {id:1 , item:"mobile" , name:"iphone15" , color:"green" , price:89000 , discount:"5%" , strorage:"128Gb"},

//         {id:1 , item:"laptop" , name:"dell" , color:"gray" , price:89000 , discount:"10%"},

//         {id:1 , item:"laptop" , name:"dell" , color:"black" , price:89000 , discount:"5%"},

//         {id:1 , item:"laptop" , name:"dell" , color:"black" , price:89000 , discount:"10%"},

//         {id:1 , item:"laptop" , name:"mac" , color:"gray" , price:89000 , discount:"10%"},

//         {id:1 , item:"laptop" , name:"mac" , color:"gray" , price:89000 , discount:"10%"},

//         {id:1 , item:"laptop" , name:"mac" , color:"gray" , price:89000 , discount:"10%"},

//         {id:1 , item:"pendrive" , name:"hp" , color:"gray" , price:2000 , discount:"10%"},

//         {id:1 , item:"pendrive" , name:"hp" , color:"gray" , price:2000 , discount:"10%"},

//         {id:1 , item:"pendrive" , name:"sandisk" , color:"gray" , price:2000 , discount:"10%"},
//     ]

//     let filter1 = ArrayObject.filter((data) => data.item === "laptop")

//     console.log(filter1);

//     let filter2 = ArrayObject.filter((data) => data.color === "black")

//     console.log(filter2);
// }

// Map Method In Array

{
    // let num = [10 , 56 , 45 , 70 , 32]

    // let Map = num.map((data) => data = 100)

    // console.log(Map);
}

// indexOf And lastIndexOf method in Array

{
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // let Index = array.indexOf("css" , 4)

    // let IndexLast = array.lastIndexOf("css" , 6)

    // console.log(Index);

    // console.log(IndexLast);

}

// Slice And Splice Method in Array

{
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // let Slice = array.slice(2)

    // let Slice1 = array.slice(2 , 5)
    
    // console.log(Slice);

    // console.log(Slice1);

    // let Splice1 = array.splice(2 , 2 , "expressJs" , "SQL" , ...Slice.n)

    // console.log(Splice1);

    // console.log(array);

}

// sorting In Array

{
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // let num = [45 , 65 , 90 , 10 , 28 , 50]

    // let sort = array.sort()

    // let Num = num.sort((a , b) => a - b)

    // console.log(sort);

    // console.log(Num);

}

// entries(), keys(), values() method in Array

{
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // let Entries = array.entries()

    // console.log(Entries.next().value);
    // console.log(Entries.next().value);
    // console.log(Entries.next().value);

    // let keys = array.keys()

    // console.log(keys.next().value);

}

// entries(), keys(), values() method in Array

{
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // let Entries = array.entries()

    // console.log(Entries.next().value);
    // console.log(Entries.next().value);
    // console.log(Entries.next().value);

    // let keys = array.keys()

    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);
    // console.log(keys.next().value);


    // let value = array.values()

    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);
    // console.log(values.next().value);

}

// Copiwithin method In Array

{
    // let array = ["javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    // console.log(array);

    // let copy1 = array.copyWithin(3)

    // console.log(copy1);

    // let copy2 = array.copyWithin(2 , 5)

    // console.log(copy2);

    // let copy3 = array.copyWithin(2 , 4 , 6)

    // console.log(copy3);

    
}