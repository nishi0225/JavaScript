'use strict'
{
//input要素を取得
const fizz = document.getElementById('Fizz');
const buzz = document.getElementById('Buzz');

//出力
const textShow = (showText) => {
  const pElement = document.createElement('p');
  pElement.textContent = showText;
  const output = document.getElementById('output');
  output.appendChild(pElement);
}

//整数値以外が入力された場合の処理
const validation_error = () => {
  const error = document.createElement('p');
  error.textContent = '整数値を入力してください';
  const output = document.getElementById('output');
  output.appendChild(error);
}

//入力値をリセット
const reset = () => {
  const output = document.getElementById('output');
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }
}
//入力された値の計算
const calc = (fizNum,buzNum) => {
  const noText = "";
  reset();
  if (Number.isInteger(Number(fizNum)) && Number.isInteger(Number(buzNum))) {
    for (let i = 1; i < 100; i++) {
      if (i % fizNum === 0 && i % buzNum === 0) {
        textShow(`FizzBuzz${i}`);
      } else if (i % fizNum === 0) {
        textShow(`Fizz${i}`);
      } else if (i % buzNum === 0) {
        textShow(`Buzz${i}`);
      }
    }
  }
  if (!Number.isInteger(Number(fizNum)) || !Number.isInteger(Number(buzNum)) || fizNum === noText || buzNum === noText) {
    validation_error();
  }
}

document.getElementById('btn').addEventListener('click', () => {
  const fizNum = fizz.value;
  const buzNum = buzz.value;

  calc(fizNum,buzNum);
})
}