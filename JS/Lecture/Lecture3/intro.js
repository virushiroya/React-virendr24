// Assignment Oprator

// {
    // ((x+=y) = (x = x + y))

//     let x = 10;
//     let y = 20;

    // let z = x+=y;
    // console.log(z);
//     console.log(x);
//     let zz = x-=y;
//     console.log(zz);
//     let z1 = x*=y;
//     console.log(z1);
//     let z2 = x/=y;
//     console.log(z2);
//     let z3 = x%=y;
//     console.log(z3);
//     let z4 = x**=y;
//     console.log(z4);

// }

// Comparision Oprator

// {
//     let x = 20;
//     let y = 10;

//     let z = x == y;
//     console.log(z);
//     let zz = x!=y;
//     console.log(zz);
//     let a = x===y
//     console.log(a);
//     let b = x!==y
//     console.log(b);
//     let c = x > y;
//     console.log(c);
//     let d = x >= y
//     console.log(d);
//     let e = x < y
//     console.log(e);
//     let f = x <= y
//     console.log(f);

// }

// Typeof Oparator

// let str = "Skillqode"
// let Num = 1234567890
// let bool = true
// let array = []
// let obj = {}
// let big = 12345678900987654321n

// console.log(str);
// console.log(Num);
// console.log(bool);
// console.log(array);
// console.log(obj);
// console.log(big);

// String Oparator

// let x = 20
// let y = "20"
// let zz = 20;
// let yy = 2;
// let xx = 4;

// let a = zz + zz + zz + y + x + y + x + x + x + zz - xx * yy / yy
// let b = yy/yy

// console.log(a);
// console.log(b);
// console.log(1/0);
// console.log(-1/0);
// console.log("1"/0);
// console.log("1"/"1");
// console.log("1" + "1" * 20);

let a = 10;
let b = 20;
let c = 5;
let d = a;

let e = a + c + d - d - a; // 10 + 5 + 10 - 10 - 10 = 5
console.log(e);
let f = e + c + a - a - e; // 5 + 5 + 10 - 10 - 5 = 5
console.log(f);
let g = c + c + b + b - e; // 5 + 5 + 20 + 20 - 5 = 45
console.log(g);
let h = f - f - b + e - e; // 5 - 5 - 20 + 5 - 5 = -20
console.log(h);
let i = f + (-f) + b + e + a + (-d); // 5 + (-5) + 20 + 5 + 10 + (-10) = 25
console.log(i);
let j = f / f + e - e - h - g + e; // 5 / 5 + 5 - 5 - (-20) - 45 + 5 = -19
console.log(j);
