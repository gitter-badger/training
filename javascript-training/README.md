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

## ライセンス

MIT © Sota Yamashita
