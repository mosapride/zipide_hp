# Array.reduce

mozillaには下記のように説明されている。

> reduce() メソッドは、配列の各要素に対して (引数で与えられた) reducer 関数を実行して、単一の結果値にします。

配列に対して値(number,string,Objectなど)を返す。

## 型宣言

```ts
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
```

parameterの説明

* previousValue
  * 最終的に返さえる値(string,number,Objectなど)、初期値は`initialValue`で定義する
* currentValue
  * 現在処理されている配列の要素
* currentIndex
  * 現在処理されている配列のインデックス(1,2,3,.....)
* array
  * `reduce()`が呼び出された配列
* initialValue
  * 初期値

## 使い方例

色々できる。

* 数値の配列の合計値を返す。
* 文字の配列の結合した値を返す。
* オブジェクトの配列の一部の合計値を返す。
* オブジェクトの配列の複数部を利用した計算値を返す。

### 数値の配列の合計値を返す

```ts
const amount = [1, 2, 3, 4];

const sum = amount.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

console.log(sum); // 10
```

### 文字の配列の結合した値を返す

```ts
const amount = ['1', '2', '3', '4'];

const sum = amount.reduce((previousValue, currentValue) => previousValue + currentValue, '')

console.log(sum); // '1234'
```

### オブジェクトの配列の一部の合計値を返す

肉の合計`gram`グラムを返す。

```ts
interface IMeat {
    name: string,  // 名前
    gram: number,  // グラム
    per100g: number  // 100グラム当りの価格
}

const meat: IMeat[] = [
    { name: '鶏肉', gram: 150, per100g: 80 },
    { name: '牛肉', gram: 500, per100g: 200 },
    { name: '豚肉', gram: 400, per100g: 150 },
];

const sumGram = meat.reduce((previousValue, currentValue) => previousValue + currentValue.gram, 0);

console.log(sumGram);  // 1050
```

### オブジェクトの配列の複数部を利用した計算値を返す

`gram / 100 * per100g`の合計値である、肉の合計金額を返す。

```ts
interface IMeat {
    name: string,  // 名前
    gram: number,  // グラム
    per100g: number  // 100グラム当りの価格
}

const meat: IMeat[] = [
    { name: '鶏肉', gram: 150, per100g: 80 },
    { name: '牛肉', gram: 500, per100g: 200 },
    { name: '豚肉', gram: 400, per100g: 150 },
];

const sumGram = meat.reduce((previousValue, currentValue) =>
    previousValue + (currentValue.gram / 100 * currentValue.per100g)
    , 0);

console.log(sumGram);  // 1720
```

## link

* [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [Github - TypeScript lib.es5.d.ts#L118](https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts#L1188)
