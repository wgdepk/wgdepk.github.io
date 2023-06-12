//  jQueryを使用してWebページのグローバルメニューを実装する

// $(".menu-toggle").on("click", function()は、.menu-toggleというクラスを持つ要素がクリックされたときに実行される関数を設定しています。
// $(this).next().slideToggle()は、クリックされた要素の次の要素をスライド表示または非表示に切り替えます。
// $(window).resize(function(){...})は、ブラウザのウィンドウサイズが変更されたときに実行される関数を設定しています。
// var win = $(window).width()は、ブラウザのウィンドウ幅を取得しています。
// var p = 768は、一定の幅を表す変数を定義しています。
// if(win > p){...} else {...}は、ブラウザのウィンドウ幅がpより大きい場合と小さい場合で分岐しています。
// $("#menu").show()は、id="menu"の要素を表示します。
// $("#menu").hide()は、id="menu"の要素を非表示にします。

$(function(){
  $(".menu-toggle").on("click", function() {
      $(this).next().slideToggle();
  });
});

$(window).resize(function(){
var win = $(window).width();
var p = 768;
if(win > p){
$("#menu").show();
} else {
$("#menu").hide();
}
});


// Webページにトップへ戻るボタンを実装する

// let pageTop = $('#page-top')は、id="page-top"の要素を変数pageTopに代入しています。
// pageTop.hide()は、pageTop変数に格納されている要素を非表示にします。
// $(window).scroll(function () {...})は、ページのスクロール位置が変更されたときに実行される関数を設定しています。
// $(this).scrollTop() > 80は、ページのスクロール位置が80ピクセル以上かどうかを判定しています。
// pageTop.fadeIn(300)は、pageTop変数に格納されている要素を0.3秒でフェードイン表示します。
// pageTop.fadeOut(300)は、pageTop変数に格納されている要素を0.3秒でフェードアウト非表示にします。
// pageTop.click(function () {...})は、pageTop変数に格納されている要素がクリックされたときに実行される関数を設定しています。
// $('body, html').animate({ scrollTop: 0}, 500)は、ページのトップへ0.5秒でスクロールするアニメーションを実行します。
// return falseは、ボタンのクリックイベントが通常のリンクの解決処理をキャンセルすることを意味します。

$ (function(){
   // 変数宣言と代入
   let pageTop = $('#page-top');
   // ボタン非表示
   pageTop.hide();
   // 80pxスクロールしたらボタン表示
   $ (window).scroll(function () {
     if ($(this).scrollTop() > 80) {
       // 0.3秒でフェードイン
       pageTop.fadeIn(300);
     } else {
       // 0.3秒でフェードアウト
       pageTop.fadeOut(300);
     }
   });
   // 0.5秒でページトップへ戻る
   pageTop.click(function () {
     $('body, html').animate({ scrollTop: 0}, 500);
     return false;
   })
 })
