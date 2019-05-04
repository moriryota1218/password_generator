'use strict';
{
  // 各HTML要素の取得
  let slider = document.getElementById('slider');
  let label = document.getElementById('label');
  let btn = document.getElementById('btn');
  let result = document.getElementById('result');
  let numbers = document.getElementById('numbers');
  let symbols = document.getElementById('symbols');

  // リロードした時にパスワードを表示させる
  function getPassword() {
    // ランダムにアルファベットを生成する
    // 数字とシンボルの変数も定義
    let seed_letters = 'abcdefghijklmnopqrstuvwxyz';
    let seed_numbers = '0123456789';
    let seed_symbols = '!#$%&()';
    let seed;

    let len = slider.value;
    let pwd = ''; //パスワードの文字列は空文字で初期化しておく

    // 英数字、記号を含めたパスワードをif文で定義
    seed = seed_letters + seed_letters.toUpperCase(); //大文字も含める
    if(numbers.checked === true) {
      seed += seed_numbers;
    }
    if(symbols.checked) {
      seed += seed_symbols;
    }

    //ループ処理を書いていく
    // for (let i = 0; i < len; i++) {
    //   pwd += seed[Math.floor(Math.random() * seed.length)];
    // }

    // while文でも同じようにかける
    while (len--) {
      pwd += seed[Math.floor(Math.random() * seed.length)];
    }


    result.value = pwd;
  }

  //sliderにイベントを追加（パスワードの長さを変える指定）
  slider.addEventListener('change', function() {
    label.innerHTML = this.value;
  });

  // ボタンがクリックされた時のイベントを追加
  btn.addEventListener('click', function() {
    getPassword();
  });

  // パスワードがコピーできやすいように全選択指定
  result.addEventListener('click', function() {
      this.select();
    });

    getPassword();

}
