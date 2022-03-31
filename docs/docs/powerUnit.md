---
title: 電源ユニット
description: データを保存するためのPCパーツのことをストレージと言います。ストレージにはSSD、HDDなどのおなじみのものから、新しいM.2規格のストレージも存在します。
---

# 電源ユニット

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/03/28
  <i class="fas fa-undo-alt"></i>2022/03/28
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

電化製品はその名の通り電気を動力源として動いています。PCも同じです。電気の流れには直流、交流の2種類があります。家庭のコンセントから供給される電流はすべて交流です。交流を直流に変換する機器のことをAC/DCコンバータといいます。PCパーツでは電源ユニットと呼ばれます。

<img :src="$withBase('/images/docs/powerUnit/powerUnit_eye_catch.png')" alt="PCケースの電源ユニットのファームファクタ確認" class="img-center">

:::tip <i class="fas fa-info-circle"></i> AC,DC
ACは交流、DCは直流のこと
:::

## 電源ユニットを選ぶポイント

電源ユニットを選ぶポイントをいくつか考えてみます。

### 大きさ

電源ユニットの大きさの規格にはATXとSFXが存在します。ATXの方が大きく、一般的です。小さなPCケースの場合はSFXのみ対応している製品もあります。PCケースの詳細ページにて確認しましょう。

#### Define Cの仕様ページの例

電源ユニットのサポートタイプにATXと記載されています。

<img :src="$withBase('/images/docs/powerUnit/pccase_atx.png')" alt="PCケースの電源ユニットのファームファクタ確認" class="img-center">

### 必要ワット数

電源ユニットには出力できるワット数があります。その種類は400W～2050Wと幅広いです。しかし、一般家庭用のコンセントは1500Wまでしか対応していません。1500Wを超える電源ユニットは工業用なので視野に入れる必要はありません。

必要な電源はパーツ構成により異なります。CPUは65W～125Wまでの商品がほとんどです。グラフィックボードの場合は75W～350Wと幅があります。その他のパーツであるマザーボード、メモリ、ストレージは端数程度なのであまり気にしなくて、ざっと多めに見積もっても100Wを超えることはありません。

#### 構成例

Intel Core™ i9-12900KとRTX 3090 の構成の場合、CPUは125W、グラフィックボードは350Wを使用すると公式に記載があります。この場合の構成では125W(CPU)＋350W(グラフィックボード)＋100W(その他)の575Wが最低限必要な電源容量の目安となります。おそらく600Wの電源ユニットでも動作するかもしれませんが、必要な使用する電源容量が計算と異なっていたり、オーバークロックなどで実はもっと電源を必要としている可能性もあります。余裕をもって最低限必要な電源容量の1.3倍ぐらいを選ぶと問題ないでしょう。

つまり575✕1.3＝約750Wとなります。

ちなみに、CPUとグラフィックボードが同時に100％の使用率になる作業を行うことは稀で、実際の消費電力は結構低めなのが現実です。

#### 変換効率

交流を直流に変換するときには必ずロスが生じます。変換できる割合のことを変換効率といいます。変換効率がもっとも良くなる条件が出力する電源の倍の電源装置を使用することが一般的です。500Wを使用するPC構成の場合は1000Wの電源ユニットを選べば良い訳です。しかし、価格が跳ね上がってしまうためお勧めしません。電気代と電源ユニットの価格差を考慮して、どちらがお得か考えてみてください。

#### 80PLUS認証

先に記述した交流から直流に変換するときには必ずロスが発生します。電源ユニットでは変換効率の認証を受けたものには80PLUS認証のマークを入れることができます。変換効率が低い順にスタンダード、ブロンズ、シルバー、ゴールド、プラチナ、チタニウムとなります。

<img :src="$withBase('/images/docs/powerUnit/80plus.png')" alt="80PLUS認証" class="img-center">

あくまで変換効率の話であり、製品の品質の保証ではありません。ただし、変換効率が良いということは発熱も少なく部品に対するストレスが少なくなるため因果関係が全くないとは言い切れません。

ブロンズだからと言って悪いとは言い切れないので、参考程度にすればよいでしょう。

### フルプラグインがスッキリして組みやすい

電源ユニットには、マザーボード、ストレージ、グラフィックボードなどに電源を供給するためのケーブルがあります。そのケーブルの仕様には一体型、セミプラグイン、フルプラグインの３つがあります。

<img :src="$withBase('/images/docs/powerUnit/plugintype.png')" alt="80PLUS認証" class="img-center">

フルプラグインは必要なケーブルのみを配線することができるため、組みやすくPC内もスッキリします。