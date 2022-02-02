# kurore_hp

**自作PC入門。Version 本音**のホームページ。

- <https://zipide.com>

## Development

```bash
npm install
npm start
```

## build

```bash
npm install
npm run build
```

`hp/docs/.vuepress/dist`にSSG後のHTMLファイル郡が出力される。

## release

**俺用**。

サーバーのwpコンテナにログイン

```bash
docker exec -it wp bash
```

```bash
cd 
./renew.sh
```

## License

MIT

度を起こした転載などはご遠慮ください。引用などを行う場合は`https://v-kurore.com`のリンクを貼ってもらうと喜びます。

## ご意見など

[twitter](https://twitter.com/v_kurore)への報告、GithubのIssues,Pull requestsを歓迎してます。

## memo

記事のフォーマットメモ

```md
---
title: 始める前に
description: 即時文字入力チェックを行うパターン。`(input) event`により発火させ、引数は`$event.target.value`にするべし。
---

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/02/01
  <i class="fas fa-undo-alt"></i>2022/02/01
</div>

```

### tip

```md
:::tip <i class="fas fa-info-circle"></i> Hoge
Tip内容を書く
:::

:::tip <i class="fas fa-book"></i> Note
場合によっては順序があるので、複数導入する場合は上から順に作業することをおすすめします。
:::
```

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```



### タイトルの書き方

description

### リンクの書き方

* [Angular](https://angular.io/)


## Image

* <https://unsplash.com/>

