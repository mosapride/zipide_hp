---
title: スタイルのコーディング規約
description: AngularではCSSのスタイル指定方法が複数存在する。その中で乱立させるよりルールを決めた方が可読性が良くなると考えた。コーディング規約っぽいのを自分なりに…
---

# スタイルのコーディング規約

AngularではCSSのスタイル指定方法が複数存在する。その中で乱立させるよりルールを決めた方が可読性が良くなると考えた。コーディング規約っぽいのを自分なりに…

## コーディング規約

1. `style`の使用禁止
1. 原則`[style]`の使用禁止
1. `[class]`の使用禁止
1. 固定スタイルは`class`を使用する
1. 可変スタイルは`[ngClass]`を使用する
1. `[ngClass]`の値は`{‘class名’:boolean,’class名’:boolean,…}`形式のみ使用する

### このルールにした理由

1. `[style]`は禁止したいが動的な処理のみに使用する必要が出てくる場合が出てくる。例えばWindowサイズによりDOMのwidthを連携させたい場合など。
2. `[class]`は複数記載する事が可能なので同じ文字が乱立し可読性が落ちる。
3. `[ngClass]`の記載方法は複数あるが、CSSのclass名がHTML上に見える方式のみにすることにより使用するスタイルclassがひと目で分かる。

## Sample

サンプルを示す。

### 固定スタイル

ごく一般的な指定方法。

固定スタイルは状態に関わらず一定のスタイルを提供する。`class`のみを使用する。

```html
<!-- sample.html -->
<div class="hoge">hogehoge</div>
```

### 可変スタイル

条件によりクラススタイルを変更したい場合。例えばエラー箇所を強調したい場合やtableなどの偶数行、もしくは奇数行などが該当する。

#### エラーの強調１

booleanの変数にて判定を行う場合

```html
<!-- sample.html -->
<div class="base" [ngClass]="{'error' : isError}">
```

```ts
// component.ts
isError:boolean;
```

```scss
// sample.scss
.base {
  color:gray;
  &.error {
    color:red;
  }
}
```

#### エラーの強調２

関数を用いて判定を行う場合

```html
<!-- sample.html -->
<div class="base" [ngClass]="{'error' : isError()}">
```

```ts
// component.ts
isError():boolean {
  // 判定処理return true;
  return true もしくは false;
}
```

```scss
// sample.scss
.base {
  color:gray;
  &.error {
    color:red;
  }
}
```

#### エラーの強調３

引数ありの関数を使用することができる

```html
<!-- sample.html -->
<div class="base" [ngClass]="{'error' : isError(hoge)}">
```

```ts
// sample.ts
isError(hoge):boolean {
  // 判定処理return true;
  if (hoge の判定) {
      return false;
  } 
  return true;
}
```

```scss
// sample.scss
.base {
  color:gray;
  &.error {
    color:red;
  }
}
```

#### 複数のクラスを指定

偶数行、最終行の強調など

```html
<!-- sample.html -->
<ng-container *ngFor="let sample of sampleArray ; let o = odd ;let l = last ;">
  <div class="base" [ngClass]="{'odd' :o, 'last' :l}">{{sample}}</div>
</ng-container>
```

```ts
// component.ts
sampleArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
];
```

```scss
.base {
  color:gray;
  &.odd {
    color:red;
  }
  &.last {
    color:yellow;
  }
}
```
