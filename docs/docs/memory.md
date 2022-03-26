---
title: メモリ
description: 机と例えられるメモリ。2022年3月現在では16GBが主流です。8GBメモリが2枚入っているメモリの購入が無難です。
---

# メモリ

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/03/18
  <i class="fas fa-undo-alt"></i>2022/03/26
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

机と例えられるメモリ。使用するアプリケーションによって必要容量が変わってきます。必要なメモリ容量の確認は必ずしましょう。

<img :src="$withBase('/images/docs/memory/memory_eye_catch.png')" alt="メモリのアイキャッチ" class="img-center">

## 最低でも16GBの時代か

2022年3月現在では**16GB**が主流です。**8GBメモリが2枚**入っているメモリの購入が無難です。

### メモリ容量とおすすめ度と用途

|組み合わせ|合計容量|おすすめ度|用途|
|---|---|---|---|
|4GB ✕ 2枚|8GB|🧡|ネットサーフィンや軽いオフィス作業|
|8GB ✕ 2枚|16GB|🧡🧡🧡|たいていの作業にストレスを感じない|
|16GB ✕ 2枚|32GB|🧡🧡|動画編集などの重作業を行う人なら、32GBは欲しい|
|32GB ✕ 2枚|64GB|🙄|本当に必要？|
|32GB ✕ 4枚|128GB|🤔|これが活かせる用途があるなら教えて下さい|

### 現在使用しているメモリの確認

今使用しているPCの搭載メモリ、使用しているメモリの確認はタスクマネージャーから確認することができます。

タスクマネージャーを起動するにはキーボードの**CTRL とSHIFTキーを押しながらESC**を押します。

<img :src="$withBase('/images/docs/docs/ctrlshiftesc.png')" alt="タスクマネージャーの起動" class="img-center">

パフォーマンスタブの、メモリから搭載容量の確認ができます。

<img :src="$withBase('/images/docs/memory/taskmanager.png')" alt="タスクマネージャー" class="img-center">

必要容量は人それぞれ違います。負荷の大きい作業している時にメモリ情報を確認し、購入するメモリ容量を知る事が一番無駄がありません。

## デスクトップ用メモリを選ぼう

メモリにはデスクトップ用とノートパソコン用のメモリが存在します。大きさが違うため間違わないようにしましょう。

デスクトップ用のメモリサイズを「UDIMM」、ノートPC用のメモリサイズを「SODIMM」と呼びますが、製品名にデスクトップ用などと記載されているため、種類があることだけ覚えておくとよいでしょう。

<img :src="$withBase('/images/docs/memory/descktop_note.png')" alt="デスクトップ用とノートPC用のメモリサイズ" class="img-center">

### なぜ２枚か

多くのマザーボードはデュアルチャネルを採用しています。2枚刺しにすることにより、パフォーマンスの向上が見込めます。

:::tip <i class="fas fa-info-circle"></i> デュアルチャネルメモリとは？
デュアルチャネルRAMは、マルチチャネルメモリの一種です。すべての種類のマルチチャネルRAMは、メモリとメモリコントローラの間にさらなる通信チャネルを追加することで、データ転送速度を増加します。

メモリモジュールと通信するためのチャネルを複数持つものがあります。これにより、データを複数のチャネルで送信できるため、より高速なデータ交換が可能になります。コントローラには、チャネルの数が1つのもの、2つのもの（デュアルチャネル）、4つのもの（クワッドチャネル）、6つのもの、8つのものがあります。通常、6つのチャネルと8つのチャネルのアーキテクチャはサーバー用に設計されます。

[PCのデュアルチャネルメモリとは？ | Crucial Japan](https://www.crucial.jp/articles/about-memory/what-is-dual-channel-memory)
:::

### 2枚セットの商品を買おう

メモリはセット商品が安心です。例えば8GBメモリを1枚入りを2個購入するのと、8GBメモリの2枚**セット**商品を購入するのは意味が違います。

<img :src="$withBase('/images/docs/memory/memory_set.png')" alt="メモリはセット商品が良い" class="img-center">

デュアルチャネルは同じメモリ容量、同じ動作周波数、同じCL値で動かすことが前提です。つまり同じメモリを2枚使うことが推奨されます。バラ売り商品をまったく同時期に2枚同時に購入するとデュアルチャネルで動作する可能性は高いですが確証はありません。そもそも単体で販売されているためデュアルチャネルは想定していないからです。同じ商品として販売していても時期により中身が変わったりします。

商品ページの注意書きに**商品のデザイン、仕様、外観、価格は予告なく変更する場合がありますのでご了承ください**などの記載があることがあります。商品を作る上に部品の入れ替えや、安全性や性能の向上などの理由から変更があることは珍しくありません。つまり同時期に購入したメモリで同じ商品名でも中身が違う可能性があります。

次に保証についてです。故障や不具合の対応にメーカーの交換サポートなどがあります。2枚セットのメモリで1枚が故障した場合は、2枚まとめて交換となります。交換サポートについては多くは同じ製品があれば同じ製品、なければ同等の商品と交換となります。1枚組の交換サポートも同じですが、交換された商品と、未故障のメモリがうまく動作する組み合わせか保証はされていません。

## DDR4かDDR5か

マザーボードの説明にも記載しましたが大切なことなので同じことを記載しています。

2022年3月現在では、マザーボードが対応するメモリ規格はDDR4とDDR5が主流です。マザーボードの対応するメモリと、差すメモリの規格が違うと物理的に刺さりません。間違った規格をさせないように切り欠きの箇所が異なります。

マザーボードの対応メモリがどちらかを必ず確認してください。

### 高価なDDR5

DDR5はDDR4の新しい規格で速度も高速になっています。しかし、半導体不足もあり在庫が少なく高価です。

価格は8GB✕2枚の場合、DDR5-4800は18,215円、DDR4-3200は7,491円と倍近くの値段差があります。

参考：[DDR5メモリ 16GB×2枚が一時3万円割れ、DDR4は上昇が目に付く [相場調査 3月第3週号] - AKIBA PC Hotline!](https://akiba-pc.watch.impress.co.jp/docs/price/monthly_repo/1395587.html)

### DDR5はDDR4に比べ早いのか

理論的にはDDR5の方が高速です。しかし、実際はDDR4と比べて体感できるほどではないようですし、場合によってはDDR4の方が高速だったりします。

DDR4は2014年に発売され成熟されています。DDR5は2021年に発売され、まだ未成熟といえるでしょう。新しい物好きの人はDDR5を選んでも良いでしょうが、高価で、パフォーマンスは出ないと思ってよいです。

* 参考
* [【DDR5の闇】DDR4 VS DDR5！速いのはどっち？ApexやFortniteなど人気タイトルでも検証！品薄な今選ぶべきなのは？【Intel第12世代】](https://www.youtube.com/watch?v=0eQZM94pk7w)
* [【自作PC】DDR4のほうが速かった、DDR4vsDDR5【H670-PRO】](https://www.youtube.com/watch?v=qTujbhP5msc)

数年後にはDDR5が標準となり、価格も落ち着いてパフォーマンスも上がることを願うばかりです。

## 規格の見方

メモリの製品名にDDR4-3200など不明な文字が並んでいます。これは規格と速度を示しています。

<img :src="$withBase('/images/docs/memory/ddr_spec.png')" alt="DDR表" class="img-center">

簡単な見方としてはモジュール速度の数値が大きければ大きいほど高速に動作します。

### スペック表は信用できない？

モジュール速度が大きいから、なんでも快適に動作する訳ではないのが現状です。理論上では高速に動くはずですが、ベンチマーク上では速度が遅いメモリの方が良いスコアを出す逆転現象が発生したりします。

さらに、メモリメーカー製品仕様にはCLレイテンシーが記載されています。これによりメモリの実測度を算出することができます。詳しくはリンクを参考にしてください。

* 参考
* [RAM速度とCASレイテンシーの違い | Crucial.com](https://www.crucial.jp/articles/about-memory/difference-between-speed-and-latency)

## 結局は

結論から言うとDDR4の場合はDDR4-3200ぐらいが安定性も価格も落ち着いています。DDR5の場合はDDR5-4800程度が良いと考えています。そして8GB✕2枚に、メモリに余裕が欲しい人は16GB✕2枚が無難なところです。

<div class="amazon-contents">
<img :src="$withBase('/amazon-logo.png')" class="img-center m-5">
<a href="https://www.amazon.co.jp/Crucial-%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97PC%E7%94%A8%E3%83%A1%E3%83%A2%E3%83%AA-PC4-25600-DDR4-3200-W4U3200CM-16G/dp/B07RX4ZGCZ?th=1&psc=1&linkCode=ll1&tag=strongtenpa-22&linkId=6c4753f347152149cc5db6665856c72a&language=ja_JP&ref_=as_li_ss_tl" target="_blank" rel="noopener" class="amazon">
<div class="amazon-name">DDR4-3200 (PC4-25600) 8GB×2枚</div>
<img :src="$withBase('/images/docs/memory/ddr4-3200_8x2.png')" alt="DDR4-3200 (PC4-25600) 8GB×2枚" class="img-center"><br>
</a>
</div>

DDR5は8GB✕2枚の商品が少なく、16GB✕2枚以上の商品が多いです。時代ですね。

<div class="amazon-contents">
<img :src="$withBase('/amazon-logo.png')" class="img-center m-5">
<a href="https://www.amazon.co.jp/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97PC%E7%94%A8%E3%83%A1%E3%83%A2%E3%83%AA-DDR5-4800-PC5-38400-Crucial-W5U4800CM-32GS/dp/B09KC44GBD?th=1&linkCode=ll1&tag=strongtenpa-22&linkId=1c5fcbd1bf57a971fbb94c2466a6efa6&language=ja_JP&ref_=as_li_ss_tl" target="_blank" rel="noopener" class="amazon">
<div class="amazon-name">DDR5-4800 (PC5-38400) 16GB×2枚</div>
<img :src="$withBase('/images/docs/memory/ddr5-4800_16x2.png')" alt="DDR5-4800 (PC5-38400) 16GB×2枚" class="img-center"><br>
</a>
</div>

