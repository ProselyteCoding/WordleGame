/**
 * 本文件是在构建 Wordle 程序过程中需要使用的脚本
 * ! 在编写代码之前请您务必仔细阅读每一行注释
 * 其中部分函数已经给出，需要您根据实际需求进行补全
 * 函数的具体作用请参考注释
 * 请确保所有的 TODO 都被补全
 * 若无特殊需要请尽量不要定义新的函数
 */

/**
 * Global Variables
 *
 * 您的所有全局变量需要在此处定义
 * 我们已经预先为您定义了一部分全局变量
 *
 * 请思考：
 *
 * 1. 为什么使用 let/const 来定义变量而不是 var 关键字      let 和 const 有更好的作用域控制，可以避免变量提升和重复声明等问题
 * 2. let 和 const 关键字定义的变量有什么区别         let 定义的变量可以被重新赋值，而 const 定义的变量是常量，不可被重新赋值
 * 3. 已经被预定义的全局变量分别有怎样的作用       这些全局变量提供了一些常用的功能和方法，使得开发人员能够更方便地进行相应的操作
 */

// 固定的答案长度
const answerLength = 5;
// 最多尝试次数
const maxGuessTime = 6;

// Wordle 中出现的三种颜色，更推荐使用枚举
// 此处 green 用字母 b 表示，具体原因请参见代码任务
const grey = "g";
const yellow = "y";
const green = "b";

// 颜色序列，类型为 string[]
let colorSequence = [];
// 单词序列，类型为 string[]
let wordSequence = [];

// 本次 Wordle 的答案
let answer = "";
// 当前猜测的答案
let guess = "";
// 当前已经使用的猜测次数
let currentGuessTime = 0;
// 当前游标位置（1~30）
let index = 1;

/**
 * 程序当前的状态，更推荐使用枚举
 *
 * 预计会使用到的状态：
 * 1. "UNFINISHED": 表示 Wordle 未被解决即仍有剩余猜测次数
 * 2. "SOLVED": 表示当前 Wordle 已被解决
 * 3. "FAILED": 表示当前 Wordle 解决失败
 * 可以根据需要设计新的状态
 */
let state = "UNFINISHED";

/**
 * 预定义的 JavaScript 程序的入口
 * 请不要额外定义其他的程序入口
 */
start();

/**
 * start()
 *
 * 整个程序的入口函数，这里为了简化程序的运行逻辑违背了单一指责原则和最小权限原则，在实际开发时不推荐这样处理
 *
 * 您需要完成的任务：
 * 1. 初始化程序的运行状态
 * 2. 接收交互信息后改变内部状态并作出反馈
 *
 * 请思考：
 * 1. 在怎样的时刻需要调用 initialize 函数
 * 2. 程序的交互信息是什么（猜测的单词？）
 * 3. 内部状态会如何根据交互信息而改变（state 变量的作用？）
 * 4. 程序内部状态变化之后会作出怎样的反馈（页面重新渲染？）
 * 5. 如何读取交互信息
 * 6. 程序在什么时候会终止
 */
function start() {
  initialize();
  // TODO
}

/**
 * render()
 *
 * 根据程序当前的状态渲染对应的用户页面
 *
 * 您需要完成的任务：
 * 1. 基于 DOM 实现程序状态和 HTML 组件的绑定
 * 2. 当程序内部状态发生改变时需要重新渲染页面
 *
 * 请思考：
 * 1. 什么是 DOM，这项技术有怎样的作用
 * 2. 如何实现程序内部状态和 HTML 组件的绑定，为什么要这么设计
 * 3. 应该在怎样的时刻调用 render 函数
 */
function render(letter) {
  // TODO
  console.log("x");
  if (letter == "E") {
    //点击ENTER键
    handleAnswer(guess);
  } else if (letter == "B") {
    //点击BACKSPACE键
    document.getElementById((index - 1).toString()).innerHTML = "";
    index -= 1;
    let newStr = guess.substring(0, guess.length - 1);
    guess = newStr;
  } else {
    guess += letter;
    document.getElementById(index.toString()).innerHTML = letter.toUpperCase();
    index += 1;
  }
}

/**
 * initialize()
 *
 * 初始化程序的状态
 *
 * 请思考：
 * 1. 有哪些状态或变量需要被初始化
 * 2. 初始化时 state 变量处于怎样的状态
 */
function initialize() {
  generateRandomAnswer().then((res) => {
    let answer = res.answer;
    let wordSequence = res.wordSequence;
    // console.log(answer);
    // console.log(wordSequence);
    for (let i = 1; i <= 30; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).style.backgroundColor = "white";
    }
    index = 1;
    currentGuessTime = 0;
    //键盘输入
    document.getElementById("Q").addEventListener("click", function () {
      render("q");
    });
    document.getElementById("W").addEventListener("click", function () {
      render("w");
    });
    document.getElementById("E").addEventListener("click", function () {
      render("e");
    });
    document.getElementById("R").addEventListener("click", function () {
      render("r");
    });
    document.getElementById("T").addEventListener("click", function () {
      render("t");
    });
    document.getElementById("Y").addEventListener("click", function () {
      render("y");
    });
    document.getElementById("U").addEventListener("click", function () {
      render("u");
    });
    document.getElementById("I").addEventListener("click", function () {
      render("i");
    });
    document.getElementById("O").addEventListener("click", function () {
      render("o");
    });
    document.getElementById("P").addEventListener("click", function () {
      render("p");
    });
    document.getElementById("A").addEventListener("click", function () {
      render("a");
    });
    document.getElementById("S").addEventListener("click", function () {
      render("s");
    });
    document.getElementById("D").addEventListener("click", function () {
      render("d");
    });
    document.getElementById("F").addEventListener("click", function () {
      render("f");
    });
    document.getElementById("G").addEventListener("click", function () {
      render("g");
    });
    document.getElementById("H").addEventListener("click", function () {
      render("h");
    });
    document.getElementById("J").addEventListener("click", function () {
      render("j");
    });
    document.getElementById("K").addEventListener("click", function () {
      render("k");
    });
    document.getElementById("L").addEventListener("click", function () {
      render("l");
    });
    document.getElementById("Z").addEventListener("click", function () {
      render("z");
    });
    document.getElementById("X").addEventListener("click", function () {
      render("x");
    });
    document.getElementById("C").addEventListener("click", function () {
      render("c");
    });
    document.getElementById("V").addEventListener("click", function () {
      render("v");
    });
    document.getElementById("B").addEventListener("click", function () {
      render("b");
    });
    document.getElementById("N").addEventListener("click", function () {
      render("n");
    });
    document.getElementById("M").addEventListener("click", function () {
      render("m");
    });
    document.getElementById("ENTER").addEventListener("click", function () {
      render("E");
    });
    document.getElementById("BACKSPACE").addEventListener("click", function () {
      render("B");
    });
    //点击“重试”按钮后重新载入题目
    document.getElementById("refresh").addEventListener("click", initialize);
  });
}

/**
 * generateRandomAnswer()
 *
 * 从题库中随机选取一个单词作为答案
 *
 * 单词文件位于 /static/words.json 中
 *
 * 请思考：
 * 1. 如何读取 json 文件
 * 2. 如何随机抽取一个单词
 *
 * @return {string} answer
 */
async function generateRandomAnswer() {
  // TODO
  return new Promise((resolve, reject) => {
    fetch("/static/words.json")
      .then((response) => response.json())
      .then((data) => {
        wordSequence = data.words;
        let rand = Math.floor(Math.random() * data.words.length) + 1;
        answer = data.words[rand];

        resolve({
          wordSequence,
          answer,
        });
      })
      .catch((error) => reject(error));
  });
}

/**
 * isValidWord()
 *
 * 判断一个单词是否合法
 *
 * 请思考：
 * 1. 判断一个单词是否合法的规则有哪些
 * 2. 是否存在多条判断规则
 * 3. 如果上条成立，那么这些规则执行的先后顺序是怎样的，不同的执行顺序是否会对单词的合法性判断造成影响
 * 4. 如果单词不合法，那么程序的状态会如何变化，程序应当作出怎样的反馈
 *
 * @param {string} word
 * @return {boolean} isValid
 */
function isValidWord(word) {
  // TODO
  // console.log(wordSequence);
  return wordSequence.includes(word, 0);
}

/**
 * handleAnswer()
 *
 * 处理一次对单词的猜测，并根据其猜测结果更新程序内部状态
 *
 * 请思考：
 * 1. 是否需要对 guess 变量的字符串作某种预处理，为什么
 *
 * @param {string} guess
 */
function handleAnswer(guess) {
  // TODO
  if (isValidWord(guess.slice(-5))) {
    let colorSequence = calculateColorSequence(guess.slice(-5), answer);
    if (colorSequence == "bbbbb") {
      // state="SOLVED";
      alert("恭喜你，成功了！");
    } else {
      currentGuessTime++;
      if (currentGuessTime == maxGuessTime + 1) {
        // state="FAILED";
        alert("您已经用完全部机会仍未成功");
      }
    }
    let i = 5;
    let temp = guess.slice(-5);
    while (i--) {
      index--;
      if (colorSequence[i] == "b") {
        document.getElementById(index.toString()).style.backgroundColor =
          "#6AAA64";
        document.getElementById(temp[i].toUpperCase()).style.backgroundColor =
          "#6AAA64";
      } else if (colorSequence[i] == "y") {
        document.getElementById(index.toString()).style.backgroundColor =
          "#C9B458";
        document.getElementById(temp[i].toUpperCase()).style.backgroundColor =
          "#C9B458";
      } else {
        document.getElementById(index.toString()).style.backgroundColor =
          "#787C7E";
        document.getElementById(temp[i].toUpperCase()).style.backgroundColor =
          "#787C7E";
      }
    }
    index += 5;
    console.log("y");
    console.log(guess);
    console.log("z");
  } else {
    guess = "";
    for (let i = 6; i >= 1; i--) {
      document.getElementById(index.toString()).innerHTML = "";
      index--;
    }
    index++;
    alert("输入单词不正确");
  }
}

/**
 * calculateColorSequence()
 *
 * 计算两个单词的颜色匹配序列
 *
 * 例如：
 * 给定 answer = "apple", guess = "angel"
 *
 * 那么返回结果为："bggyy"
 *
 * 请思考：
 * 1. Wordle 的颜色匹配算法是如何实现的
 * 2. 有哪些特殊的匹配情况
 *
 * @param {string} guess
 * @param {string} answer
 * @return {string} colorSequence
 */
function calculateColorSequence(guess, answer) {
  // TODO
  let judge = [false, false, false, false, false];
  let ans = new Array("aaaaa");
  for (let k = 0; k < 5; k++) {
    if (guess[k] === answer[k]) {
      ans[k] = "b";
      judge[k] = true;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (ans[i] == "b") continue;
    for (let j = 0; j < 5; j++) {
      if (guess[i] === answer[j] && judge[j] === false) {
        ans[i] = "y";
        judge[j] = true;
        break;
      }
      if (j == 4 && (guess[i] != answer[j] || judge[j] === true)) ans[i] = "g";
    }
  }
  let result = "";
  for (let i = 0; i < 5; i++) result += ans[i];
  return result;
}
