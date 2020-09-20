---
title: HttpClientを理解する。
description: APIサーバーとの通信を行うhttpClient。ただの通信を行うだけなのだが、実は中身はかなり複雑で公式ドキュメントの情報量を多い。しかしコーディングする上ではかなりわかりにくい。ge`がどのように実装されているのか。どのようにコーディングすればよいのかを理解すれば、その他のメソッドであるpost、deleteなどのメソッドもコーディングしやすくなる。
---

# HttpClientを理解する

APIサーバーとの通信を行う`httpClient`。ただの通信を行うだけなのだが、実は中身はかなり複雑で公式ドキュメントの情報量を多い。しかしコーディングする上では分かりにくい。`get`がどのように実装されているのか。どのようにコーディングすればよいのかを理解すれば、その他のメソッドである`post`、`delete`などのメソッドもコーディングしやすくなる。

## Link

* [Angular - Communicating with backend services using HTTP](https://angular.io/guide/http)
* [https://github.com/angular/angular/blob/master/packages/common/http/src/client.ts#L1101](https://github.com/angular/angular/blob/master/packages/common/http/src/client.ts#L1101)
* [HTTP レスポンスステータスコード - HTTP | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Status)

## GETがどのように実装されているか

getメソッドの実態のコードを見てみる。

[https://github.com/angular/angular/blob/master/packages/common/http/src/client.ts#L1101](https://github.com/angular/angular/blob/master/packages/common/http/src/client.ts#L1101)

```ts
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('GET', url, options as any);
  }
```

型情報が大雑把で`any`も使っているが、これは10以上のメソッドをオーバーロードしているから。

### getの戻り値

`responseType?: 'arraybuffer'|'blob'|'json'|'text'`に記述されている通り、**データ形式は4つ**ある。その中でもよく使うであろう
jsonを取得する場合(`responseType: 'json'`)でもいくつか記述方法が存在する。**オーバーロードされた３つのソース**をピックアップしてみた。

```ts{3,6,12,15,21,24}
  get(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>;

  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>;

  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>;
```

注目してもらいたいものは`observe`によって、戻り値が変わるところ。`observer`は3種類存在する。

```ts
export type HttpObserve = 'body'|'events'|'response';
```

| observe  | return                               | 用途                       |
|----------|--------------------------------------|--------------------------|
| body     | Observable\<Object\>                 | 情報のみ取得                   |
| response | Observable\<HttpResponse\<Object\>\> | 情報のみ取得した場合 + header情報を取得 |
| events   | Observable\<HttpEvent\<Object\>\>    | 全ての情報を取得したい場合            |

型を指定しなければObject型を返すが、ジェネリクスも実装されている。**通常はジェネリクスで宣言されたメソッドを使う**ことになる。

```ts
  get<T>(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>;
```

リクエストJsonの型を定義し、3種類の`observe`を定義した場合は下記のようになる。

```ts
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpStatusTestService {
  constructor(private httpClient: HttpClient) {}

  public requestGetBody(): Observable<Config> {
    return this.httpClient.get<Config>(`${environment.apiUrl}`, {
      responseType : 'json',
      observe: 'body',
    });
  }

  public requestGetResponse(): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`${environment.apiUrl}`, {
      responseType : 'json',
      observe: 'response',
    });
  }

  public requestGetEvent(): Observable<HttpEvent<Config>> {
    return this.httpClient.get<Config>(`${environment.apiUrl}`, {
      responseType : 'json',
      observe: 'events',
    });
  }
}
```

戻り値はresponseTypeとobserveにより変化することを覚えておいてほしい。`HttpEvent`、`HttpResponse`の型定義は`@angular/common/http`に存在する

```ts
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
```

| responseType | observe  | 戻り値                                       |
|--------------|----------|-------------------------------------------|
| arraybuffer  | body     | Observable\<ArrayBuffer\>                 |
| arraybuffer  | response | Observable\<HttpResponse\<ArrayBuffer\>\> |
| arraybuffer  | events   | Observable\<HttpEvent\<ArrayBuffer\>\>    |
| blob         | body     | Observable\<Blob\>                        |
| blob         | response | Observable\<HttpResponse\<Blob\>\>        |
| blob         | events   | Observable\<HttpEvent\<Blob\>\>           |
| json         | body     | Observable\<Object\>                      |
| json         | response | Observable\<HttpResponse\<Object\>\>      |
| json         | events   | Observable\<HttpEvent\<Object\>\>         |
| text         | body     | Observable\<string\>                      |
| text         | response | Observable\<HttpResponse\<string\>\>      |
| text         | events   | Observable\<HttpEvent\<string\>\>         |

※Objectはジェネリクス`T`により型を設定できる。

**オーバーロードされていること、パラメーターにより戻り値が変わること**を理解すればコーディングができる。
`post`、`put`、`delete`などのメソッドも似たコードになっている。**IDE上ではオーバーロードされた情報が表示されるためすっごく見にくい**のでコードを見ることをお勧めする。

[https://github.com/angular/angular/blob/master/packages/common/http/src/client.ts](https://github.com/angular/angular/blob/master/packages/common/http/src/client.ts)

## HTTPステータスによる動作の確認

※下記サンプルコードはsubscribeに注力するためにサービス定義をしないコーディングをしている。本来はサービスを実装・仕様によりエラーハンドラを設定するべき。

まずはsubscribeの処理の確認から。subscribeでは、正常処理、エラー、完了通知に分けることができる。なお**エラーと完了通知はコーディング省略可能**。これらの処理は**HTTPレスポンスステータスコードにより処理の流れが変わる**。

```ts
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// 型
export interface Config {
  heroesUrl: string;
  textfile: string;
}

// componentメソッド
  debug(): void {
    this.httpClient
      .get<Config>('http://localhost:8080/config', { observe: 'body' })
      .subscribe(
        (value) => {},                     // 1.正常処理
        (error : HttpErrorResponse) => {}, // 2.エラー(省略可能)
        () => {}                           // 3.完了通知(省略可能)
      );
  }
```

| HTTP Status Code    | 処理順             |
|---------------------|-----------------|
| 情報レスポンス(100-199)    | 2.エラー           |
| 成功レスポンス (200–299)   | 1.正常処理 → 3.完了通知 |
| リダイレクト (300–399)    | 2.エラー           |
| クライアントエラー (400–499) | 2.エラー           |
| サーバエラー (500–599)    | 2.エラー           |

つまり、成功レスポンスと、それ以外で分けることができる。

### responseTypeの使い分け方

| responseType | 用途                                |
|--------------|-----------------------------------|
| arraybuffer  | 固定長のバイナリーデータのバッファを示すために使われるデータタイプ |
| blob         | ファイルに似たオブジェクトで、immutable な生データ    |
| json         | jsonデータ                           |
| text         | text                              |

よく使うのは`json`。arraybutterとblobはよくわからない。バイナリやファイルをHttpClientで取得するのがベストなのか？

### observeの使い分け

| observe  | 用途                 |
|----------|--------------------|
| body     | リクエストしたデータのみ欲しい場合  |
| response | HttpResponseが欲しい場合 |
| events   | HttpEventが欲しい場合    |

[HttpResponse](https://angular.io/api/common/http/HttpResponse)は`body`であるリクエストしたデータも含まれている。取得するには`HttpResponse.body`となる。

```ts
  debug(): void {
    this.httpClient
      .get<Config>('http://localhost:8080/config', { observe: 'response' })
      .subscribe(
        (value : HttpResponse<Config>) => {
          console.log(value.status); // 正常処理であるコードステータス(200～299)
          console.log(value.body);   // レスポンスデータ
        },
        (error : HttpErrorResponse) => {},
        () => {}
      );
  }
```

[HttpEvent](https://angular.io/api/common/http/HttpEvent)は複数のデータ型の定義となる。コードを見てみるとすぐわかる。

```ts
type HttpEvent<T> = HttpSentEvent | HttpHeaderResponse | HttpResponse<T> | HttpProgressEvent | HttpUserEvent<T>;
```

`HttpEvent`がどの型なのか`type`により調査しなければならない。

```ts
import { HttpClient ,HttpEventType } from '@angular/common/http';

  debug(): void {
    this.httpClient
      .get<Config>('http://localhost:8080/config', { observe: 'response' })
      .subscribe(
        (value : HttpEvent<Config>) => {
          if (value.type === HttpEventType.Response) {  // typeを検査した後に処理を行う。
            // HttpResponseと確定される
            this.responseJson = data.body;
          }
        },
        (error : HttpErrorResponse) => {},
        () => {}
      );
  }
```
