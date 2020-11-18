'use strict'
{
//input要素を取得
const fizz = document.getElementById('Fizz');
const buzz = document.getElementById('Buzz');

//表示
const textShow = (showText) => {
  const pElement = document.createElement('p');
  pElement.textContent = showText;
  const output = document.getElementById('output');
  output.appendChild(pElement);
}

//整数値以外が入力された場合
const validation_error = () => {
  const error = document.createElement('p');
  error.textContent = '整数値を入力してください';
  const output = document.getElementById('output');
  output.appendChild(error);
}

//リセット
const reset = () => {
  const output = document.getElementById('output');
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }
}

document.getElementById('btn').addEventListener('click', () => {
  const fizNum = fizz.value;
  const buzNum = buzz.value;

  if(Number.isInteger(Number(fizNum)) && Number.isInteger(Number(buzNum))) {
    reset();
  }else{
    reset();
    validation_error();
  }

  for(let i = 1; i < 100; i++) {
    if(i % fizNum === 0 && i % buzNum === 0) {
      textShow(`FizzBuzz${i}`);
    }else if(i % fizNum === 0) {
      textShow(`Fizz${i}`);
    }else if(i % buzNum === 0) {
      textShow(`Buzz${i}`);
    }
  }
})
}