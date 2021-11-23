---
title: 箱庭ドキュメント - Introduction
description: 箱庭 https://hako.v-kurore.com のドキュメントサイト。
---

# 箱庭ドキュメント - Introduction

<img :src="$withBase('/images/hako/top.png')" alt="TypeScriptとJavaScriptの実行イメージ">


ここは[箱庭](https://hako.v-kurore.com)のドキュメント。

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>


## 箱庭とは

箱庭とは**動画配信者同士**のコミュニティサイトです。

Youtubeアカウントをお持ちの方なら個人・法人(所属)に関係なく登録することが出来ます。入会・退会は自由です。また、箱庭はすべて無料です。

どのようなゲームやジャンルに興味があること、配信時間帯や共演NG(例：異性コラボ禁止)などを記述することで円滑なコラボをすることを目的としています。立ち絵をアップロードにも対応しており面倒な作業を単一化させます。

箱庭は個人で開発しており、問題などがあれば[twitter](https://twitter.com/v_kurore)で報告してくれると助かります。

クライアントサイドのコードはOSSにて公開しています。サーバーサイドはセキュリティを考慮し非公開にしています。  
[https://github.com/mosapride/niwatori-client](https://github.com/mosapride/niwatori-client)

## 退会

登録の前に退会を説明しておきます。

登録後にプロフィールの編集を行うことができます。そこに退会ボタンが存在します。退会を行うと登録情報すべてを削除します。再登録には何日まで開ける必要があるなどの**ペナルティは一切ありません**。

箱庭は**配信者同士の出会い・コミュニティ**を目的としたサイトであり、**気の合う仲間ができ、箱庭が不要になったと感じて貰えたほうが本望**ですので気兼ねなく退会してください。また、機会があれば再登録のことよろしくお願いします。

<img class="border" :src="$withBase('/images/hako/withDrawal.png')" alt="退会">

## (箱庭で)ログイン後にできること

ログインすることにより、自己PR、公開する立ち絵、コラボ希望タイトルの登録が行えます。  
※配信動画の表示は自動で行われるため手動による操作は行うことができません。

ログインにはGoogleアカウントを利用します。Googleアカウントを利用する理由は**成りすまし防止**のためです。

ログインには[OAuth 2.0 Authorization](https://developers.google.com/youtube/v3/guides/authentication)を利用しています。管理人には「動画と再生リストの表示」「YouTube でのアクティビティの表示」情報のみ取得します。**E-Mailアドレスを含む個人情報に関わる情報の取得することはできません**。

### 箱庭で出来ないこと

**メッセージを送る機能は実装していません**。これはTwitterなどのSNSの方がすぐれていると考えているからです。箱庭はあくまでコラボ相手を探す。立ち絵の配布を簡易化することが目的であるがためです。**メッセージは他のサービス(Twitterなど)の利用をすることが前提**となっております。

メッセージを実装しない理由にはスマホアプリの開発・運用コスト。PUSH通知などには別途お金が掛かる。会話内容の保持による管理者としてのリスクを持ちたくないと言う**開発者のリスク回避**もあります。

## ログインを行う

画面右上の「ログイン」 - 「Singn in with Google」からログインをしてください。

<img class="border" :src="$withBase('/images/hako/kuro-login1.png')" alt="ログイン方法1">

<img class="border" :src="$withBase('/images/hako/kuro-login2.png')" alt="ログイン方法2">

登録を行うチャンネル名を選択してください。Googleの仕様上、デフォルトのユーザーが表示されます。**多くの場合は２番目のYouTubeとかかれているアカウント**になります。

<img class="border" :src="$withBase('/images/hako/kuro-login3.png')" alt="ログイン方法3">

どのような情報をの取得を許可するかの詳細を確認することができます。

<img class="border" :src="$withBase('/images/hako/kuro-login0.png')" alt="取得する権限">

間違ったアカウントで登録を行った場合は**退会を行って**ください。データは削除されます。
