# kurore_hp

クロdocのgithubリポジトリ

[v-kurore.com](https://v-kurore.com)

## Development

```bash
npm install
npm run dev
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
title: `Angular|TypeScript|HTMLxxx`など - `タイトル`
description: description内容の抜粋
---
```

Google Adsense

```atom
<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>
```

### タイトルの書き方

description

### リンクの書き方

* [Angular](https://angular.io/)

### イメージ画像

```md
貼り付け
<img :src="$withBase('/images/hako/profile.png')" alt="TypeScriptとJavaScriptの実行イメージ">
または
![TypeScriptとJavaScriptの実行イメージ](/images/hako/profile.png)

枠付き
<img class="border" :src="$withBase('/images/hako/skin03.png')" alt="skin変更手順3">
```



