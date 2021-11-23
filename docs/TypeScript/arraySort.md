---
title: Array.sortの使い方メモ
description: 公式ドキュメントを読んでもいまいちどういう時に使うかわかりにくい。ユースケースにあった記述を簡単に説明。
---

# Array.sort

mozillaには下記のように説明されている。

> sort() メソッドは、配列の要素を in place でソートします。既定のソート順は昇順で、要素を文字列に変換してから、UTF-16 コード単位の値の並びとして比較します。

うん。意味がわからん。

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

簡単なデモ

```ts
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"] 


const hoge = [5, 6, 8, 10, 50, 410];
hoge.sort();
console.log(hoge);  // [10, 410, 5, 50, 6, 8] 

```

デフォルトのソートでは数値も文字としてソートするため数値を想像したsort処理ではない。そのため比較をどのように行うかを定義する必要がある。

```ts
const hoge = [5, 6, 8, 10, 50, 410];
hoge.sort((a, b) => a - b);
console.log(hoge);  // [5, 6, 8, 10, 50, 410] 

hoge.sort((a, b) => b - a);
console.log(hoge);  // [410, 50, 10, 8, 6, 5] 
```

はっきり言うと、こんな単一配列のソートなんて使わない。

## 比較処理


```ts
interface Array<T> {
    // ・・・・・・・・・・・・・・・・・・略
    /**
     * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this;
}
```

引数a,bを元に任意の比較を行い数値を返す。この戻り値である数値は1以上、0、-1以下を返す必要がある。

イメージとしては1以上は昇順、0はソートなし、-1以下は降順みたいになる。※この説明は大体あってるぐらいで正確ではない。

## Object配列のソートその１

単一配列よりもObjectの配列の方が理解しやすい。

生徒オブジェクトの配列をScore順にソートする。わかりやすいように丁寧に型定義を宣言しているが、本来は不要。

```ts
type TStudent = {
    name: string,
    score: number
}

const student: TStudent[] = [
    { name: '田中', score: 10 },
    { name: '鈴木', score: 80 },
    { name: '砂糖', score: 50 },
    { name: '佐藤', score: 20 },
    { name: '織田', score: 50 },
    { name: '豊臣', score: 100 },
    { name: '卑弥呼 ', score: 1000 },
]

student.sort((a: TStudent, b: TStudent) => {
    return a.score - b.score
})
console.log(student);
// [{
//   "name": "田中",
//   "score": 10
// }, {
//   "name": "佐藤",
//   "score": 20
// }, {
//   "name": "砂糖",
//   "score": 50
// }, {
//   "name": "織田",
//   "score": 50
// }, {
//   "name": "鈴木",
//   "score": 80
// }, {
//   "name": "豊臣",
//   "score": 100
// }, {
//   "name": "卑弥呼 ",
//   "score": 1000
// }] 
```

## Object配列のソートその２

subject順、score順などもすることができる。

```ts
type TStudent = {
    name: string,
    subject: string,
    score: number
}

const student: TStudent[] = [
    { name: '田中', subject: '英語', score: 10 },
    { name: '鈴木', subject: '英語', score: 80 },
    { name: '砂糖', subject: '数学', score: 50 },
    { name: '佐藤', subject: '数学', score: 20 },
    { name: '織田', subject: '英語', score: 50 },
    { name: '豊臣', subject: '数学', score: 100 },
    { name: '卑弥呼 ', subject: '英語', score: 1000 },
]

student.sort((a: TStudent, b: TStudent) => {
    if (a.subject < b.subject) {
        return -1;
    }
    if (a.subject > b.subject) {
        return 1;
    }
    return a.score - b.score;
})
console.log(student);
// [{
//   "name": "佐藤",
//   "subject": "数学",
//   "score": 20
// }, {
//   "name": "砂糖",
//   "subject": "数学",
//   "score": 50
// }, {
//   "name": "豊臣",
//   "subject": "数学",
//   "score": 100
// }, {
//   "name": "田中",
//   "subject": "英語",
//   "score": 10
// }, {
//   "name": "織田",
//   "subject": "英語",
//   "score": 50
// }, {
//   "name": "鈴木",
//   "subject": "英語",
//   "score": 80
// }, {
//   "name": "卑弥呼 ",
//   "subject": "英語",
//   "score": 1000
// }] 
```

## link

* [Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Github - TypeScript lib.es5.d.ts#L1290](https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts#L1290)
