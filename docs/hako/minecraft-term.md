---
title: 箱庭Minecraft ルールなど
description: 箱庭Minecraft ルールと知ってほしいこと、箱庭鯖でみんなで楽しくプレイするために必要なこと
---

# 箱庭Minecraftルール

箱庭Minecraft ルールと知ってほしいこと、箱庭鯖でみんなで楽しくプレイするために必要なこと

<img :src="$withBase('/images/hako/minecraft-hako.png')" alt="箱庭サーバー">



1. 他人に迷惑をかけない
2. 他人の物を盗まない
3. 他人に作業などを強要しない
4. サーバーに負荷をかける行為をしない
5. ブランチマイニングは資源サーバーで
6. みんなで楽しく
7. データが消えたらごめんね

## MODについて

特に規制はしていません。ただしMinecraftのゲーム性を脅かすMODや他人に迷惑をかけるMODは禁止です。

逆に便利なMODは教えて下さい。

## OptiFine

OptifineとはMinecraftの軽量化MODです。Minecraft自体は軽いゲームになりますが配信状況により動画が重くなってしまいます。ゲームに支障がある場合にOptifineの導入を検討してください。

下記に導入手順を記述しておきます

### 一度Minecraftを起動

Minecraftを一度も遊んでいない場合は起動しシングルプレイなどでプレイ済みである必要があります。起動時にバージョンデータが作成され、それを利用してOptiFineをインストールするためです。

その後、Minecraftは終了してください。

### OptiFineのダウンロード

[OptiFine Downloads](https://optifine.net/downloads)を開きMirrorからDownloadを行います。過去のバージョンをダウンロードしたい場合は「Show all versions」をクリックします。

<img class="border"  :src="$withBase('/images/hako/optifine01.png')">

Chromeブラウザでダウンロードを行うと警告がでますが、そのまま保存をしてください。

<img class="border"  :src="$withBase('/images/hako/optifine02.png')">

説明を簡易化するためにダウンロードしたOptiFineはCドライブ直下に置いてください。

<img class="border"  :src="$withBase('/images/hako/optifine03.png')">

ファイル名をOptiFine.jarに変更します。

<img class="border"  :src="$withBase('/images/hako/optifine03-1.png')">

次に「Windowsメニュー - Windows システムツール - コマンドプロンプト**右クリック** - その他 - 管理者として実行」を実行しコマンドプロンプトを起動します。

<img class="border"  :src="$withBase('/images/hako/optifine04.png')">

コマンドプロンプトに下記コマンドをコピペしてEnterを押し実行します。  

```bash
"C:\Program Files (x86)\Minecraft Launcher\runtime\jre-x64\bin\java.exe" -jar "C:\OptiFine.jar"
```

<img class="border"  :src="$withBase('/images/hako/optifine05.png')">

OptiFine Installerが起動されるので、Install ボタンを押します。

<img class="border"  :src="$withBase('/images/hako/optifine06.png')">

インストール後はコマンドプロンプトを閉じてください、`C:\OptiFine.jar`はもう要らないので削除してください。

<img class="border"  :src="$withBase('/images/hako/optifine07.png')">