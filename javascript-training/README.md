JavaScript Training
===================

## Documentオブジェクト

## DOM

## DocumentFragment

コード：`src/documentFragment.html`

DocumentFragmentは軽量なDocumentオブジェクトです。DOMツリーの一部としてや新しいフラグメントとして作成します。例えば以下の例のようなコードがあるとします。これだと10回の描画処理をしなくてはいけません。

```
var target  = document.getElementById("parent");

for ( var i = 0; i < 10; i++ ) {
  var element = createElement("p");
  target.appendChild(element);
}
```

こういった無駄な再描画を防ぐためにDocumentFragments使えます。DocumentFragmentsを使った実際の例は以下のとおりです。

```
var target  = document.getElementById("parent");

// 空のfragment作成
var fragment = document.createDocumentFragment();

// 一度fragmentの中に追加していく
for ( var i = 0; i < 10; i++ ) {
  var element = createElement("p");
  fragment.appendChild(element);
}

// まとめて追加
target.appendChild(fragment);
```

それでは実際のDocumentFragmentsを使用したコードに付いて詳しく説明してきます。

* [DOM DocumentFragments](http://ejohn.org/blog/dom-documentfragments/)
* [1.2. Fundamental Interfaces](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3)
* [DocumentFragment](https://developer.mozilla.org/ja/docs/Web/API/DocumentFragment)

## ESlint

### ESprimaとは

### Acornとは

###

### Espresとは

Espreeは[Esprima](http://esprima.org/)をフォークしたECMAScripitで作成されたECMAScriptのパーサー。以下の様の機能がある。

* ECMAScript 5.1のサポート
* ESTreeの実装
* コードの順番や行数をトラッキング
*

パースされた空のjsファイルはこんな感じ。コードがあれば`body`内にどんどん追加されていくかんじっぽい。このようなものを[ESTree](https://github.com/estree/estree)というらしい。

```js
{ type: 'Program', body: [], sourceType: 'script' }
```

ためしにunserscore.jsのコードをパースしてみるとコード数は多いはずなのにbodyの中には一つしか式がないと言われました。

```js
$ node espree.js ./node_modules/underscore/underscore.js
{ type: 'Program',
  body:
   [ { type: 'ExpressionStatement',
       expression: [Object],
       range: [Object],
       loc: [Object] } ],
  sourceType: 'script',
  range: [ 216, 52914 ],
  loc:
   { start: { line: 6, column: 0 },
     end: { line: 1548, column: 14 } } }
```

どういうことが分からなかったので、次はEspressのコードで試してみることにしました。この場合はだいぶたくさん出てきました。

```
{ type: 'Program',
  body:
   [ { type: 'ExpressionStatement',
       expression: [Object],
       range: [Object],
       loc: [Object] },
     { type: 'VariableDeclaration',
       declarations: [Object],
       kind: 'var',
       range: [Object],
       loc: [Object] },
     { type: 'VariableDeclaration',
       declarations: [Object],
       kind: 'var',
       range: [Object],
       loc: [Object] },
     { type: 'ExpressionStatement',
       expression: [Object],
       range: [Object],
       loc: [Object] },
```

このことからこの実行方法だと一番上、つまりトップレベルものしか表示されないということがわかりました。どういうことかというと

これだと2つ

```
function User(){
  //
}

function.prototype.getName() {
  //
}
```

これだと1つ

```
!(function(){

  function User(){
    //
  }

  function.prototype.getName() {
    //
  }

}());
```

## その他

[Spider Monkey](https://developer.mozilla.org/ja/docs/SpiderMonkey)はCで書かれたGeckoのJavaScriptエンジンでMozillaの複数の製品で使用されている。
ちなみに[Gecko](https://developer.mozilla.org/ja/docs/Mozilla/Gecko)とはMozillaで開発しているレイアウトエンジンです。もともとはNGLayoutという名前でした。

フロントエンドエンジニアとしてブラウザがどのように私達が作成したコードをブラウザに表示しているかを理解することはとても重要です。その理解を助けてくれるとものとして
[ブラウザの仕組み: 最新ウェブブラウザの内部構造](http://www.html5rocks.com/ja/tutorials/internals/howbrowserswork/)や[Mozilla's Layout Engine](http://www-archive.mozilla.org/newlayout/doc/layout-2006-12-14/master.xhtml)を読むことをおすすめします。


## 作りたいもの

* tabelog on Pinterest - 食べログの評価をPinterest上に表示するChrome拡張機能

## ライセンス

MIT © Sota Yamashita
