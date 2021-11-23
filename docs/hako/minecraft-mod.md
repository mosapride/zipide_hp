---
title: 箱庭Minecraft Modについて
description: 箱庭Minecraftで遊ぶ場合のModについて
---

<img :src="$withBase('/images/hako/minecraft-hako.png')" alt="箱庭サーバー">

# MODについて

特に規制はしていません。ただしMinecraftのゲーム性を脅かすMODや他人に迷惑をかけるMODは禁止です。

便利なMODがあれば教えて下さい。

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

## おすすめMOD

おすすめMODと導入の仕方についてです。気が向いたら追加していきます。

### OptiFine

OptifineとはMinecraftの軽量化MODです。Minecraft自体は軽いゲームになりますが配信状況により重くなってしまいます。**ゲームに支障がある場合にOptifineの導入を検討してください**。

下記に導入手順を記述しておきます

#### OptiFine導入手順1 - 一度Minecraftを起動

Minecraftを一度も遊んでいない場合は起動しシングルプレイなどでプレイ済みである必要があります。起動時にバージョンデータが作成され、それを利用してOptiFineをインストールするためです。

その後、Minecraftは終了してください。

#### OptiFine導入手順2 - OptiFineのダウンロード

[OptiFine Downloads](https://optifine.net/downloads)を開きMirrorからDownloadを行います。過去のバージョンをダウンロードしたい場合は「Show all versions」をクリックします。

<img class="border" :src="$withBase('/images/hako/optifine01.png')">

Chromeブラウザでダウンロードを行うと警告がでますが、そのまま保存をしてください。

<img class="border" :src="$withBase('/images/hako/optifine02.png')">

#### OptiFine導入手順3 - OptiFineの保存ディレクトリと名前の変更

説明を簡易化するためにダウンロードしたOptiFineはCドライブ直下に置いてください。

<img class="border" :src="$withBase('/images/hako/optifine03.png')">

ファイル名を**OptiFine.jar**に変更します。

<img class="border" :src="$withBase('/images/hako/optifine03-1.png')">

#### OptiFine導入手順4 - コマンドプロンプトを管理者権限で起動

次に「Windowsメニュー - Windows システムツール - コマンドプロンプト**右クリック** - その他 - 管理者として実行」を実行しコマンドプロンプトを起動します。

<img class="border" :src="$withBase('/images/hako/optifine04.png')">

コマンドプロンプトに下記コマンドをコピペしてEnterを押し実行します。  

```bash
"C:\Program Files (x86)\Minecraft Launcher\runtime\jre-x64\bin\java.exe" -jar "C:\OptiFine.jar"
```

<img class="border" :src="$withBase('/images/hako/optifine05.png')">

OptiFine Installerが起動されるので、Install ボタンを押します。

<img class="border" :src="$withBase('/images/hako/optifine06.png')">

インストール後はコマンドプロンプトを閉じてください、`C:\OptiFine.jar`はもう要らないので削除してください。

Minecraftを起動し、OptiFineが表示されていれば成功です。

<img class="border" :src="$withBase('/images/hako/optifine07.png')">

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>