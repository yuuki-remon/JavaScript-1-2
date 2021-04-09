'use strict';

{
  // do {
  // }
  let num = 0;
  
  while (num < 5) {
    let result = prompt('日本の首都は？');
    console.log(result);
  
    if (result === '東京') {
      alert('正解です!');
    } 
    else if(result === null) {
      alert('キャンセルされました。');
    }
    else if (result === '') {
      alert('入力されていません。');
    }
    else if (result != '東京'){
      alert('不正解です!');
    }
    if (result === '東京') continue;
    num++;
    // console.log(num);
    // console.log(result);
  }
}