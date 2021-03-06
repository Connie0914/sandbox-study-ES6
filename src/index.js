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

const name = "connie";
const age = "20";

const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message);

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
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// //map, filerを使った配列の処理
const nameArr = ["田中", "山田", "鈴木"];

//新しい配列を生成する
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//条件に合った新しい配列を生成する
const numArr = [1, 2, 3, 4, 5];
const oddNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(oddNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "鈴木") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const num = "1300";
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
};
console.log(checkSum(50, 110));
