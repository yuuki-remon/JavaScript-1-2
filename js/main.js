'use strict';

{  
  while (true) {
    let result = prompt('日本の首都は？');
  
    if (result === '東京') {
      alert('正解です!');
      break;
    } 
    else if (result === null) {
      alert('キャンセルされました。');
    }
    else if (result === '') {
      alert('入力されていません。');
    }
    else if (result != '東京') {
      alert('不正解です!');
    }
  }
}