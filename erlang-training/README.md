Erlang Training
=================

このレポジトリは、Software Desginの「Erlangで学ぶ並列プログラミング」という連載のなかで書かれていることをまとめたるするために使用しています。なのでこのトレイニングは最低でも1ヶ月に1回更新します。

* Erlang Training
 * 第1回 Erlang/OTPとは
  * インストール
  * Erlang／OTP参考書
 * ライセンス

# 第1回 Erlang/OTPとは

## インストール

MacはHomebrewを使ってインストールすることができます。インストールには少し時間がかかるかもしれません。

```bash
$ brew update
$ brew upgrade --all
$ brew install erlang
```

erlを実行できるようになっていると思うので実行します。erlを実行すると対話型実行環境であるerlang shellは使用可能になります。そして以下のようにするとバージョンの確認ができます。

```bash
$ erl
Erlang/OTP 17 [erts-6.4] [source] [64-bit] [smp:4:4] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Eshell V6.4  (abort with ^G)
1>
BREAK: (a)bort (c)ontinue (p)roc info (i)nfo (l)oaded
       (v)ersion (k)ill (D)b-tables (d)istribution
v
Erlang (BEAM) emulator version 6.4
Compiled on Thu Apr  2 10:10:30 2015
```

## Erlang/OTP参考書

* 公式サイト
 * [Erlnag](http://www.erlang.org/)
* サイト
 * [Learn you some Erlang for great good!日本語訳](http://www.ymotongpoo.com/works/lyse-ja/)
 * [Learn You Some Erlang for great good!英語](http://learnyousomeerlang.com/)
* 本
 * [プログラミングErlang](http://goo.gl/qT1FsY)
 * [すごいErlangゆかいに学ぼう!](http://goo.gl/xJVJDZ)

#

# ライセンス

MIT © Sota Yamashita
