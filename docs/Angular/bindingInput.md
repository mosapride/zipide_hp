---
title: 即時入力チェック
description: 即時文字入力チェックを行うパターン。`(input) event`により発火させ、引数は`$event.target.value`にするべし。
---

# 即時入力チェック

即時文字入力チェックを行うパターン。`(input) event`により発火させ、引数は`$event.target.value`にするべし。

```html
<!-- app.component.html -->
<input type="text" (input)="check($event.target.value)">
<div>{{msg}}</div>
```

```ts
// app.component.ts
  msg : string;
// ------
  check(val:string): void {
    if (event.target.value(/^[a-zA-Z]+$/)) {
      this.msg = 'OK';
    } else {
      this.msg = 'NG';
    }
  }
```

## アンチパターン

`$event.target.value`を使わずに`ngModel`で双方向bindした値をチェックする方法も一見よさそうだが、全角文字入力→決定(Enter)時で文字が確定された時点で`input event`が発火されないため、未チェックになる可能性がある。

```html
<!-- app.component.html これはアンチパターン -->
<input type="text" [(ngModel)]="inputVal" (input)="check()">
<div>{{msg}}</div>
```

```ts
// app.component.ts これはアンチパターン
  inputVal : string;
  msg : string;
// ------
  check(): void {  // !!! 発火されないパターンが存在する
    if (this.inputVal.match(/^[a-zA-Z]+$/)) {
      this.msg = 'OK';
    } else {
      this.msg = 'NG';
    }
  }
```

### その他のアンチパターン

* (change) event
  * 理由→inputダイアログがらフォーカスが外れた時に実行される
* (key) event全般
  * 理由→マウスによるペーストには反応しない。

## サーバーでのチェックが必要な場合

処理手順としては簡単に3(4?)つになる。

* サーバーリクエストの停止
* ローカルで値チェック
* サーバーリクエストの発行準備(setTimeout)
* サーバーリクエストの発行(setTimeout内の処理)

このサンプルではサーバーリクエストの発行準備(setTimeout)が行われ、1500ms内に値の変更が行われた場合setTimeoutを停止し再度サーバーリクエストの発行準備を行う。つまり**最終入力から1500ms後にサーバーへの問い合わせが発火される**。

1500msは適当な時間で仕様により変更すればよい。

```ts
// app.component.ts
  checkInterval: NodeJS.Timer;
  msg: string;
// -----
  serverCheck(val: string): void {
    // すでにチェック待ちの場合は停止させる。
    if (this.checkInterval) {
      clearTimeout(this.checkInterval);
      this.checkInterval = undefined;
    }
    // ローカルでできるチェックを行う。
    if (!val.match(/^[a-zA-Z]+$/)) {
      return;
    }

    this.checkInterval = setTimeout(() => {
      this.checkInterval = undefined;
      // サーバーチェックリクエスト処理
    }, 1500);
  }
```
