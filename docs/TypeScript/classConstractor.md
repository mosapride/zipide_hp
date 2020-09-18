---
title: クラスのコンストラクターのアクセス修飾子による挙動の違い
description: コンストラクターの引数に対するアクセス修飾子の有無による挙動の違い。クラス内のメソッド・プロパティ以外にもコンストラクターの引数にもアクセス修飾子が使用できる。
---

# クラスのコンストラクターのアクセス修飾子による挙動の違い

コンストラクターの引数に対するアクセス修飾子の有無による挙動の違い。

## アクセス修飾子

クラス内のメソッド・プロパティ以外にもコンストラクターの引数にもアクセス修飾子が使用できる。

### メソッド・プロパティのアクセス修飾子

|アクセス修飾子|意味|
|---|---|
|(宣言なし)|publicと同様|
|public|自身のクラス内、継承クラス、インスタンス化されたクラスのどれからでもアクセス可能|
|protected|自身のクラス、継承クラスからアクセス可能|
|private|自身のクラスのみアクセス可能|

### コンストラクターの引数に対して宣言できるアクセス修飾子

|アクセス修飾子|意味|
|---|---|
|(宣言なし)|constructorメソッド内のみアクセス可能|
|public|自身のクラス内、継承クラス、インスタンス化されたクラスのどれからでもアクセス可能|
|protected|自身のクラス、継承クラスからアクセス可能|
|private|自身のクラスのみアクセス可能|

## コンストラクターの引数にアクセス修飾子なしの場合

```ts
class BaseHoge {
  constructor(arg: number) { }
}
```

コンパイルされると

```js
class BaseHoge {
    constructor(arg) { }
}
```

型情報だけがなくなる。

## コンストラクターの引数にアクセス修飾子ありの場合

```ts
class BaseHoge {
  constructor(private arg: number) { }
}
```

コンパイルされると

```js
class BaseHoge {
    constructor(arg) {
        this.arg = arg;  // 自分のプロパティに自動的にargプロパティが宣言される
    }
}
```

## つまりは省略されているだけ

つまりはコンストラクターで引数にアクセス修飾子をつけることによって自身のプロパティ宣言を省略できる訳。

コンストラクターにアクセス修飾子をつけた場合と、付けずに自身でプロパティを宣言・代入した場合のコードは同様になる。

分かりやすくBaseAクラスとBaseBクラスを作ってみた。コード量は違うが機能は同一。


```ts
class BaseA {
  constructor(arg0: number, public arg1: number, protected arg2: number, private arg3: number) {
    console.log({ arg0, arg1, arg2, arg3 });
  }
}

class BaseB {
  public arg1: number;
  protected arg2: number;
  private arg3: number;
  constructor(arg0: number, arg1: number, arg2: number, arg3: number) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    console.log({ arg0, arg1, arg2, arg3 });
  }
}
```

コンパイルされると同じ


```js
class BaseA {
    constructor(arg0, arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0, arg1, arg2, arg3 });
    }
}
class BaseB {
    constructor(arg0, arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0, arg1, arg2, arg3 });
    }
}
```
