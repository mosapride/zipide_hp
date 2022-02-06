# 記事を書くにあたってのメモ

## テンプレート

```md
---
title: 始める前に
description: 即時文字入力チェックを行うパターン。`(input) event`により発火させ、引数は`$event.target.value`にするべし。
---

# 始める前に

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/02/01
  <i class="fas fa-undo-alt"></i>2022/02/01
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>
```

## 画像

```md
貼り付け
<img :src="$withBase('/images/hako/profile.png')" alt="TypeScriptとJavaScriptの実行イメージ">
または
![TypeScriptとJavaScriptの実行イメージ](/images/hako/profile.png)

枠付き
<img class="border" :src="$withBase('/images/hako/skin03.png')" alt="skin変更手順3">
```

## Google Adsense

```atom
<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>
```

## tip

○にiのアイコン

```md
:::tip <i class="fas fa-info-circle"></i> Info
Tip内容を書く
:::
```

本のアイコン

```md
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

### amazon

```html
<div class="amazon-contents">
<img :src="$withBase('/amazon-logo.png')" class="img-center m-5">
<a href="アフィリエイトURL" target="_blank" rel="noopener" class="amazon">
<div class="amazon-name">商品名</div>
<img :src="$withBase('/images/docs/docs/width500pxの画像.png')" alt="ドライバー" class="img-center"><br>
</a>
</div>
```