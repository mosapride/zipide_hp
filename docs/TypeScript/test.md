# 日本語1

[YYTypeScript](https://yyts.connpass.com/)で教えてもらった事のメモ。

![todo-image](/hero.png =100x100)

TypeScriptはJavaScript同様にクラスの作成ができます。JavaScriptの違いとしては型安全機能が追加されていることです。その中のコンストラクターの引数に対するアクセス修飾子の有無による挙動の違いを紹介します。

## Быстрее и лучше!

クラス内のメソッド・プロパティ意外にもコンストラクターの引数にもアクセス修飾子が使用できます。

### 日本語12

|アクセス修飾子|意味|
|---|---|
|(宣言なし)|publicと同様|
|public|自身のクラス内、継承クラス、インスタンス化されたクラスのどれからでもアクセス可能|
|protected|自身のクラス、継承クラスからアクセス可能|
|private|自身のクラスのみアクセス可能|

### 日本語13

|アクセス修飾子|意味|
|---|---|
|(宣言なし)|constructorメソッド内のみアクセス可能|
|public|自身のクラス内、継承クラス、インスタンス化されたクラスのどれからでもアクセス可能|
|protected|自身のクラス、継承クラスからアクセス可能|
|private|自身のクラスのみアクセス可能|


*hoge.ts*

```typescript
class BaseHoge {
  constructor(arg: number) { }
}
```

コンパイルされると

*hoge.js*

```js
class BaseHoge {
    constructor(arg) { }
}
```

型情報だけがなくなります。

## 日本語15

*hoge.ts*

```ts
class BaseHoge {
  constructor(private arg: number) { }
}
```

コンパイルされると

*hoge.js*

```js
class BaseHoge {
    constructor(arg) {
        this.arg = arg;  // 自分のプロパティに自動的にargプロパティが宣言される
    }
}
```

## asdfdsfasd

つまりはコンストラクターで引数にアクセス修飾子をつけることによって自身のプロパティ宣言を省略できる訳です。

コンストラクターにアクセス修飾子をつけた場合と、付けずに自身でプロパティを宣言・代入した場合のコードは同様になります。

分かりやすくBaseAクラスとBaseBクラスを作ってみました。コード量は違いますが、機能は同じです。

*hoge.ts*

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

*hoge.js*

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

以上、なんとなく使ってた．．．．

