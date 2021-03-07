---
title: AngularでOGP対応の限界と対処
description: TwitterやFacebook、DiscrodなどにURLを貼ると画像つきリンクになるがAngularで実装するとなると限界がある。
---

※これは**2021年3月の記事です。botの仕様により動作しなくなる恐れがあります**。

対処法だけ見たい人は下にスクロール

<google-ads/>

# AngularでOGP対応の限界と対処

TwitterやFacebook、DiscordなどにURLを貼ると画像つきリンクになるがAngularで実装するとなると限界がある。

「Angular OGP」で調べてみると[@angular/platform-browser/Meta](https://angular.jp/api/platform-browser/Meta)を使った記事が見つかる。静的なページだと問題ないがHttpClientなどを使用し**動的にOGP情報を変更するとなると動作しない**。

## OGP情報はいつ読み取られるのか

Twitterの公式Forumsに記載がある

[Card error, unable to render, or no image: READ THIS FIRST - Cards - Twitter Developers](https://twittercommunity.com/t/card-error-unable-to-render-or-no-image-read-this-first/62736)

> is your page adding the tags after it is loaded, for instance using JavaScript (e.g. Angular, Meteor, Google Tags Manager)? The crawler and validator cannot execute JavaScript and the tags must be static.

つまりTwitterではJavaScriptにて動的にmeta情報を変えたとしても**JavaScript起動前の情報を読み込むため反映されない**と言うこと。**ブラウザ上では表示されていてもbotには読まれていない**。これはFacebookやDiscordにも言える。

## 対処法

結論から言うと**Angularでは対処が不可能**である。では、どうするかと言うとbot用のページを用意する。

WebサーバーでUserAgentがfacebook、twitter、discordのbotであった場合はOGPを適用した静的ページを返すようにする。箱庭はnginxをproxyサーバとして使用しているためこのような設定にしている。

例として[箱庭](https://hako.v-kurore.com)では`https://hako.v-kurore.com/u/[ユーチューブチャンネルID]`はユーザー単一ページを示す。これがbotによるリクエストの場合はOGP対応した静的なHTMLを返す`https://api.v-kurore.com/api/v1/google/seo/[ユーチューブチャンネルID]`に書き換える。

```atom
server {
    server_name hako.v-kurore.com;
    listen 80;
    access_log /var/log/nginx/access.log vhost;
    location / {
        if ($http_user_agent ~* "(facebookexternalhit/[0-9]|Twitterbot|Discordbot)") {
            rewrite ^/u/(.*)$ https://api.v-kurore.com/api/v1/google/seo/$1 permanent;
        }
        proxy_pass http://hako.v-kurore.com;
    }
}
```


下記は`https://api.v-kurore.com/api/v1/google/seo/`のHTMLを返す処理。DBから必要な情報を取得しHTML文を返す。最低限必要な内容はOGPに必要な情報のみとなるが、一応bodyにも簡単な情報を記載している。

```ts
  async seo(channelId: string): Promise<string> {
    const user = await this.userService.findOne(channelId);
    if (!user) {
      return '';
    }
    const description = user.youtubeDescription
      .replace(/\r?\n|/g, '')
      .replace(/\x20+|\u3000+/g, ' ')
      .slice(0, 100);
    const title = `${user.youtubeChannelName} - 箱庭`;
    const youtubeChannelId = user.youtubeChannelId;
    const youtubeThumbnailsUrl = user.youtubeThumbnailsUrl;
    const youtubeChannelName = user.youtubeChannelName;
    return `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <title>${title}</title>
        <meta name="keywords" content="${youtubeChannelId},${youtubeChannelName}" />
        <meta charset="utf-8" />
        <meta name="description" content="${description}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="${description}" />
        <meta property="og:url" content="https://hako.v-kurore.com/u/${youtubeChannelId}" />
        <meta property="og:image" content="${youtubeThumbnailsUrl}" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="${youtubeThumbnailsUrl}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:url" content="https://hako.v-kurore.com/u/${youtubeChannelId}" />
      </head>
      <body>
      <h1>${youtubeChannelName}</h2>
      <p>${description}</p>
      </body>
    </html>
  `;
  }
```

<google-ads/>

## 確認

TwitterとFacebookは確認ページが用意されている。

Twitter→[Twitter Cards Validator](https://cards-dev.twitter.com/validator)

<img  :src="$withBase('/images/Angular/ogp1.png')" >

Facebook→[シェアデバッガー - Facebook for Developers](https://developers.facebook.com/tools/debug/)

<img  :src="$withBase('/images/Angular/ogp2.png')" >