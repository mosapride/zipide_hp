---
title: 箱庭Minecraft ルールなど
description: 箱庭Minecraft ルールと知ってほしいこと、箱庭鯖でみんなで楽しくプレイするために必要なこと
---

<img :src="$withBase('/images/hako/minecraft-hako.png')" alt="箱庭サーバー">

# 箱庭Minecraftルール

箱庭Minecraft ルールと知ってほしいこと、箱庭鯖でみんなで楽しくプレイするために必要なこと

1. 他人に迷惑をかけない
2. 他人の物を盗まない
3. 他人に作業などを強要しない
4. サーバーに負荷をかける行為をしない
5. ブランチマイニングは資源鯖で
6. みんなで楽しく
7. データが消えたらごめんね
8. 管理人は放任主義

## サーバー負荷による禁止行為

どれぐらいまでなら許されるとかのラインはありませんが、ある程度明言化しておかないとトラブルの元となるので

- クロック回路の長期放置の禁止
- 友好的Mob(牛、鶏、豚など)の大量繁殖の禁止
- 天空トラップ(TTT)、エンダーマントラップは自動でMobの処理ができるように設計すること

負荷の状況により運営が撤去する場合があります。

## メイン鯖と資源鯖

メイン鯖は岩盤で囲まれたチェストと、テレポートポイントの岩盤枠がある場所です。

<img :src="$withBase('/images/hako/loggin06.png')">

岩盤の中を通ることにより、資源鯖に移動することができます。

### メイン鯖と資源鯖の役割の違い

メイン鯖のリセットは行いません。建築やトラップなどはメイン鯖で作成することをオススメします。

一方資源鯖は、資源を採掘することを目的とし定期的にリセットを行うため建築物などは無くなります。

## 物資はご自由に

<img :src="$withBase('/images/hako/loggin05.png')">

メイン鯖の初期スポーン地点付近に岩盤で囲まれたチェストがあります。中身は今現在以下となります。

* エリトラ
* シェルカーの殻
* 鉄ブロック
* 火薬
* ベッド
* パン

これらの物資は必要な場合に**自由に持っていって**ください。無くなったら追加します。

物資を置いておく理由は

* エリトラ・シェルカーの殻は有限であり、独占・遠慮することがないようにするため
* 鉄ブロック・火薬はトラップを作成し生成することが可能だが、トラップ作動のために放置する必要があるため
* ベッド・パンは初心者救済用

鉄、火薬は置いておりますが、**ゴーレムトラップ、クリーパートラップなどの作成を禁止している訳ではありません**。**トラップを作成すること自体がマイクラの楽しみ方の一つ**です。興味があれば是非作成してください。

マルチサーバーで長時間放置する場合は他プレイヤーが寝れない、モンスターの湧きに偏りが出てくるなど弊害がでてくるので、それを回避するための処置の一つです。PCの電気代ももったいないですしね。

## コマンド

コマンドで`/mv tp world`と打つと初期スポーン地点にワープします。

<img :src="$withBase('/images/hako/loggin07.png')">

これはマルチ鯖でスポーン地点が破壊され、エンドに閉じ込められる可能性があるため、回避処置として有効にしていますが、**迷子になった場合や遠出した場合にも利用してください**。

※homeやhubなどのMODの入れ方が分からなかった。

## 管理は放任主義

基本放任の方向です。バックアップデータからの巻き戻しも特例を覗いて考えていません。ただし悪意のあるユーザーについてはホワイトリストから削除することはあります。
