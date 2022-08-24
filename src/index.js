/**
 * const,letなどの変数宣言
 */
/*
const val = {
  name: "hoge",
  age: "99",
}

val.name = "huga"
val.age = "66"
val.gender = "unknown"

console.log(val)

const val2 = ["hoge", "99"]

val2[0] = "fuga"
val2[1] = "66"
val2.push("unknown")

console.log(val2)
*/
/**
 * アロー関数
 */

//  function hoge(str) {
//   return str
//  }

//  console.log(hoge(1))

const func = (int) => int * 5;

console.log(func(3));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(1, 4));

/**
 * 分割代入
 */

//  const prof = {
//    name: "hoge",
//    age: 99,
//  }

// //  const message = `名前は${prof.name}です。年は${prof.age}です`

// //  console.log(message)

// const { name, age } = prof
// const message = `名前は${name}です。年は${age}です`
// console.log(message)

// const prof = ["hoge", 99]
// // const message = `名前は${prof[0]}です。年は${prof[0]}です`

// // console.log(message)

// const [name, age] = prof
// const message = `名前は${name}です。年は${age}です`
// console.log(message)

// const ohayo = (name = "名無しさん") => console.log(`こんにちは${name}さん`)
// ohayo("天使ちゃん")

// 配列の展開
// const arr = [1, 2]
// console.log(arr)
// console.log(...arr)

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// //sumFunc(arr[0], arr[1])
// sumFunc(...arr)

const arr = [1, 2, 3, 4, 5];
const [num1, num2, ...arr2] = arr;
console.log(num1);
console.log(num2);
