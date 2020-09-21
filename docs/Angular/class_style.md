---
title: classとclass.xxxxの違い
description: 前章でスタイルのコーディング規約を記述したが、[class]と[class.xxxx]の仕様を確認しておく。
---

# classとclass.xxxxの違い

前章でスタイルのコーディング規約を記述したが、`[class]`と`[class.xxxx]`の仕様を確認しておく。

<google-ads/>

HTML上のスタイルを変更するにはstyle=にて直接スタイルを指定するパターンとclass=にてCSSに定義されたクラスを指定するやりかたがある。Angularでの`[class]`と`[class.xxxx]`は後者に該当し、また状態によりスタイルを変更したい場合に使用する。
逆に変化の無いclass指定は(普通のスタイル指定は)

```html
<div class='red'>赤くする</div>
```

となる

## [class]について

書式：`[class]='stringの変数名'`

[class]は`[class]='変数名'`で指定する変数名の中身はCSSで使用するクラス名となる。つまり何かしらの条件で変数の内容を変更する＝スタイルの変更となる

```html
<!-- app.component.html -->
<div [class]='cssStyle'>Hogehoge</div>
```

```ts
// app.component.ts
let cssStyle:string;

どこかのclick():void {
  this.cssStyle = 'red';
}
```

初期値は空なのでスタイルは何も指定されていない。どこかのclickイベントが発生した時、cssで宣言されている`.red`のスタイルが適用される。通常のスタイル指定と同じように**複数を指定する事も可能**。

```ts
// app.component.ts
どこかのclick():void {
  this.cssStyle = 'red big';  // ←cssのredクラスとbigクラスを指定
}
```

### [class]は１つしか宣言できない

`[class]`は一つのタグ内で一つしか宣言できない。**エラーは出ないが複数指定した場合は最後に宣言したものが有効**となる。

```html
<div [class]="cssStyle1" [class]="cssStyle2"> <!-- 最後に記載したcssStyle2のみ有効化される -->
```

### classと[class]は一緒に宣言できない

classと[class]の同時宣言も最後が有効となるようだ

```html
<div class="hoge" [class]="cssStyle1">  <!-- hogeは無視される -->
```

## [class.xxxx]について

書式：`[class.xxx]='booleanの変数、またはbooleanを返す式'`

[class.xxxx]の**xxxx部分はCSSのクラス名**を指定する。CSSにredクラスが宣言されている場合`[class.red]`となる、`[class.red]='true'`の時だけredが有効となる。つまり、**trueの場合、「指定したCSSのクラスが宣言」。falseの場合「無視される」状態となる**。
`[class.red]='"ABCD"=== "ABCD"'`などbooleanを返す式もできる。

```html
<!-- booleanの変数の場合 -->
<div [class.myRed ]="isRed">

<!-- 条件式としても使用できる -->
<div [class.myRed ]="abc === cdf">
```

### [class.xxxx]は複数指定しても大丈夫

```html
<div
    [class.myRed]="isRed"
    [class.myBlue]="isBlue"
    [class.hoge1]="isHoge1 === hoge"
    [class.hoge2]="abc.length > cdf.length ? true: false"
>
```
