---
title: Nodeを利用したランダムパスワードの作成
description: JWTやAES暗号化などを使用するときにパスワードが必要となる。完全なランダムが好ましいので機械的に作成する。
---

# Nodeを利用したランダムパスワードの作成

私のベストプラクティス。

Base64を利用し、記号を除いた大文字小文字英数字(0～9,a～z,A～Z)の文字列を出力する。

下記は32文字文のランダムな文字列を出すサンプル。短いパスワード、長いパスワードが欲しい場合は最後の32を数を変更すればよい。

```ts
require('crypto').randomBytes(1000).toString('base64').replace(/[\/\+\=]/g,'').substring(0,32)
```

### 説明

`require('crypto')`は、Nodeの暗号化API。標準搭載されている。

`require('crypto').randomBytes(1000)`で、ランダムな1000Byte分のデータを出力する。

`require('crypto').randomBytes(1000).toString('base64')`でBase64フォーマットに変換する。文字数は1000文字以上となる。

`require('crypto').randomBytes(1000).toString('base64').replace(/[\/\+\=]/g,'')`で記号部分を削除する。

`require('crypto').randomBytes(1000).toString('base64').replace(/[\/\+\=]/g,'').substring(0,32)`で必要な文字数のみ抜き取る。

### 補足

`randomBytes(1000)`で大量のランダムデータを作成する理由としては、必要とするパスワード文字数以上を出力しておけばよいが、記号を削除するため計算が面倒なので、とりあえず1000Byteもあれば十分であろうと単純な考え。

暗号化アルゴリズムは複数あるが、ほとんどのアルゴリズムではパスワードを決まった長さ(例えば32バイト)に変換するため、後方文字(32バイト以降)が無視してしまうようなことも**あるらしい**。

記号を取り除く理由は、プログラミングコードでコーディングを行う場合はエスケープを考慮しないといけない場合があるため。記号を含めたい場合はreplaceを削除すればよい。

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>