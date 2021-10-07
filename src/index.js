/**
 * const, let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

const val3 = "const変数";
console.log(val3);

// constは上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// // constは再宣言不可能
// const val3 = "const変数を再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "Connie",
  age: 20
};

val4.name = "coni";
val4.address = "Tokyo";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "connie";
// const age = "20";

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

/**
 * アロー関数
 */

const func = (str) => {
  return str;
};
console.log(func("funcです"));

const func2 = (num1, num2) => num1 + num2;
console.log(func2(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "Connie",
  age: 20
};
const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myProfile2 = ["Connie", 20];
const message3 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message3);
const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);

/**
 * デフォルト値, 引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん!`);
sayHello();

/**
 * スプレッド構文 ...
 */

//配列の展開
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); // 3
sumFunc(...arr1); //3

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3); // [3, 4, 5 ]

// 配列のコピー、結合
