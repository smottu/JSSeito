// 変数
let test1 = "Hello World!";

// test = "Hello World2!"


// 定数
const test2 = "Hello Hello!"

// 配列
let inoki = ["いち","に","さん","だーー！！"];
// console.log(inoki[2]);

// ループ文
// let index = 1;
// while(index < inoki.length){ //=4つの配列
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++; //数字を一足す
// };

// if / else
// if(inoki.length > 5){
//   console.log("ボンバイエ！");
// } else {
//   console.log("ボンバ...!");
// };


// 関数　同じ命令を何度も使う　　任意のタイミングで使う時
const test = (arg) => {
  if(inoki.length > arg){
    console.log("ボンバイエ！");
  } else {
    console.log("ボンバ...!");
  };
};

test(2);