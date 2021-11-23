---
title: Google OAuth審査が通った話と改善した方法
description: Google APIを利用する場合に、Youtubeビデオの提出を求められて面倒だったので参考程度に残しておく。
---

# Google OAuth審査が通った話

Google APIを利用する場合に、Youtubeビデオの提出を求められて面倒だったので参考程度に残しておく。

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

## 参考サイトになったサイト

- [GoogleのOAuth審査に苦労した話 | チョコボのメモちょう](https://ff14chocopad.com/archives/google-oauth.html)
- [Googleアドオンの申請でハマるポイント - Qiita](https://qiita.com/satrex/items/e69500f1b2decf13156c)

## 申請したサイトはどんなサイト

これです→[箱庭](https://hako.v-kurore.com)

登録した人のYoutube情報などの表示するサイト。

## 審査のポイント

2度の審査に落ちました。落とされる理由はメールに記述されていますが、駄目だったポイントは

### その１ リリース状態が疑われて弾かれる

[箱庭](https://hako.v-kurore.com)は登録ユーザーが存在して成り立つシステムです。わかりやすく表現するなら利用者0人のTwitterがあるとしたら誰も呟いていないし、フォローもいいねも何も機能しないはずです。つまり画面は真っ白になります。

審査時にこの真っ白な状態だったため「これは開発状態だよね」と言われて弾かれたので**ダミーデータをInsert**しました。

### その２ 英語表示でない

審査を通すために英語化する必要はありませんが、**日本語表示ではNG**です。申請するサイトが英語対応していない場合は**Google翻訳で英字表記**にしてYoutubeビデオを提出する必要があります。

### その３ client idを見せていない

Google OAuthを使用したログイン画面のURLに`client_id=`が含まれます。これを動画内で見せないといけないようです。

## 提出した動画

メールアドレスが表示されるので一部モザイクをつけていますが、それ以外の加工は行っていません。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Euj_K7fGoLg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

