---
title: Introduction
description: TypeScriptのことを書くドキュメント。JavaScriptで書くより楽。だが面倒な部分もあるのも事実。JavaScriptのメモ的なものも書く。
---

# Introduction

TypeScriptのことを書くドキュメント。

JavaScriptで書くより楽。だが面倒な部分もあるのも事実。JavaScriptのメモ的なものも書く。

<google-ads/>

## リンク集

* [TypeScript](https://www.typescriptlang.org/)
  * TypeScript公式サイト
* [VS Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
  * エディタ。これを使っておけば問題ない。
* [Node.js](https://nodejs.org/)
  * Node.js公式サイト。リリースのサイクルが早い
  * [Releases](https://nodejs.org/en/about/releases/)
* NVM(Node Version Manager)
  * Nodeのバージョン管理システム。これがないと困る。
  * Mac/Linux [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
  * Windows [nvm-windows](https://github.com/coreybutler/nvm-windows)

## 銀の弾丸

そんなものはない。

1. JavaScriptの知識は必須。
1. TypeScriptは型付きJavaScriptと言える。暗黙的型宣言ではなく明示的型宣言なので**JavaScriptよりコーディング量は多く**なる。
1. ルールを厳しくすると作業量が増え、**開発効率が落ちる**。バランスが大事。
1. any、unknownを**完全に無くす事は難しい**。
1. TypeScriptのbreaking changeは稀だが、**機能追加は頻繁**に行われる。

### コンパイル設定が面倒

原則、TypeScriptで書かれたコードは直接実行できない。tscを使用しJavaScriptコードに変換し実行を行う。

JavaScriptに変換するルールはtsconfig.jsonに記載する。tsconfig.jsonの公式リファレンスである[Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig)をチラ見してもらうとよく分かるのだが手動で記述する場合は苦労する。

フレームワークを利用する場合がほとんどだと思うが、その場合はスケルトンを作成するツールが存在する場合が多い。素直にスケルトンを利用することにより**開発環境構築作業を削減することができる**。

::: tip tsc
TypeScript compilerの略。TypeScriptコードをJavaScriptコードに変換を行う。型チェッカー(typechecker)を実行し、型の不正を検知したりするがIDEが警告してくれる。コンパイルと聞くと最適化を行ってくれると思うがtscは正確にはトランスコンパイラと言う。最適化する訳ではないため処理スピードの向上などがしないと思って良い。
:::

::: tip トランスコンパイラ
ある言語のソースコードから別の言語のソースコードを生成すること。TypeScript→JavaScript、SASS→CSSなど。
:::

[Deno](https://deno.land/)を使うことによりTypeScriptコードから直接実行できるみたい(使ったこと無い)。TypeScriptを直接実行することが標準になる未来も近いかもしれない。

### JavaScriptは無くならない

TypeScriptは大きなプロジェクトでは非常に強力な言語だが、**数行のJavaScriptコードをTypeScriptで開発するメリットはない**。

### TypeScript以外にも学習が必要

tscはトランスコンパイル機能を提供するものなのでコーディング中のエラーチェック機能は非常に弱い。

この弱点を補うためにLintツールが必要となる。TypeScriptでは主に[ESLint](https://eslint.org/)を利用する。ESLint機能には1行の文字数制限、セミコロンの有無、タブサイズなど一般的なコーディング規約の他に、TypeScriptコード独自のルールが設定でき戻り値の型の強制やanyの許可などを設定できる。

ESLintの他に[Prettier](https://prettier.io/)などのフォーマッターも入れておくと楽になる。

ざっくりな機能説明をするならこんな感じ。

* tsc
  * コンパイラ
* ESLint
  * コーディング規約を管理
* Prettier
  * フォーマッター

## メリット

1. 実行前チェックが行える。
1. IDEによる補完。

この２つが最大の特徴。

### なぜか

型チェッカーがあるため実行前にバグを潰すことができる。
簡単な例としてJavaScriptとTypeScriptで書かれた名前を返す関数を例にする。
first(姓)、last(名)を結合するfullName関数を作成する。

JavaScriptの場合はこのような感じ。

```js
// sample.js
function fullName(first , last) {
    return first + ' ' + last;
}

const name = fullName('太郎','田中');
console.log(name); // 太郎 田中
```

数値も入れる事ができ、エラーも出ない。しかしこれが想定した操作なのか？

```js
// sample.js
function fullName(first , last) {
    return first + ' ' + last;
}

const name = fullName('太郎','田中');
console.log(name); // 太郎 田中
const errorName = fullName(1234,'太郎');
console.log(errorName); // 1234 太郎
```

TypeScriptの型宣言を明示することにより仕様を明確化することができる。また引数の型が異なる場合はIDE上でエラーを教えてくれる。

```ts
// sample.ts
function fullName(first: string, last: string): string {
    return first + ' ' + last;
}

const errorName = fullName(1234, '太郎');  // Argument of type 'number' is not assignable to parameter of type 'string'.
```

JavaScriptの場合は実行するまでバグかどうか解らないが、TypeScriptではコンパイル時(実際はIDE上)にエラーが発生するためバグを未然に防ぐことができる。

![TypeScriptとJavaScriptの実行イメージ](/images/TypeScript/typescript_javascript_comp.png =508x195)

このような小さな関数ではメリットを感じない。しかし、大きなプロジェクトの場合は引数がObjectだったり、外部パッケージを利用する場合に**IDE補完機能を用いることにより開発効率が格段に上がる**。
