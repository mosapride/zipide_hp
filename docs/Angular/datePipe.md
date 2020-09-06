# DatePipeの使用方法

パイプを使って使用するだけだと思ってたDatePipeだが、transform関数も持ってた。

## パイプを使った使用方法

nowDateはDate型の変数。フォーマット指定することによりいろんな表記方法が可能。
よく使われるフォーマットはすでに定義されており'short'や'fullTime'など名前が定義されている。また、カスタムフォーマットも使用可能。

定義フォーマット名や、カスタムフォーマットで使用できる値などは公式に書かれているがサンプルを書いておく。

[https://angular.io/api/common/DatePipe](https://angular.io/api/common/DatePipe)

```html
<!-- nowDateはDate型 -->
<div>{{nowDate | date:'short'}}</div>     ## 3/4/19,11:24 AM
<div>{{nowDate | date:'fullTime'}}</div>  ## 11:24:05 AM GMT+09:00
<div>{{nowDate | date:'yyyy'}}</div>      ## 2019(カスタムフォーマット)
<div>{{nowDate | date:'yyyy/MM/dd HH:mm'}}</div> ## 2020/09/06 18:05(カスタムフォーマット)
```

## コード内での使用方法

コード内でDateFormatを行いたい場合は[moment.js](https://momentjs.com/)などの外部日付モジュールもあるが、Angular-DatePipeで事足りることが多いはず。

実装方法は

1. constructorにDatePipeを宣言
2. DatePipe.transformを自由に使う

```ts
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private datePipe: DatePipe) { }

  getYYYYMMDD() {
    const d = new Date();
    return this.datePipe.transform(d, 'yyyy/MM/dd');
  }
}
```
