---
title: マザーボード
description: マザーボードはすべてのパーツを接続するための部品です。CPU、CPUクーラー、メモリー、ストレージ、電源ユニットすべてが接続されます。見るべきところはチップセットとサイズになります。互換性が無いCPUとマザーボードの組み合わせをした場合は、形自体が違うため組み込むこと自体ができません。
---

# マザーボード

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/02/13
  <i class="fas fa-undo-alt"></i>2022/02/26
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

<img :src="$withBase('/images/docs/motherBoard/mother_eye_catch.png')" alt="マザーボードはすべてを繋ぐ" class="img-center">

マザーボードはすべてのパーツを接続するための部品です。CPU、CPUクーラー、メモリー、ストレージ、電源ユニットすべてが接続されます。見るべきところはチップセットとサイズになります。

## CPUと互換性があるマザーボードを選ぼう

<img :src="$withBase('/images/docs/motherBoard/AMD-Ryzen-Support-Matrix.jpg')" alt="Ryzenチップセット" class="img-center" style="max-width:80%">

マザーボードにはチップセットと呼ばれる部品が内蔵されています。CPUとチップセットには対応する製品があるため、対応していないCPUとマザーボードの組み合わせにしてしまうと動作しません。

> チップセットとは「ブリッジ」とも呼ばれ、パソコンに搭載されているパーツや機器の橋渡しをする、マザーボードやCPUなどに存在する集積回路となります。
> [参考](https://www.dospara.co.jp/5info/cts_str_parts_chipset)

チップセットにはランクがあります。わかりやすい箇所ではUSBのポート数です。上位ランクの方が多くのUSBポートが実装されています。しかし、**特殊な用途以外ではチップセットのランクを意識する必要はありません**。

<img :src="$withBase('/images/docs/motherBoard/2020-05-08-image-8-j_1100.png')" alt="チップセットによる違い" class="img-center" style="max-width:80%">

チップセットは橋渡しの役割のため、上位ランクのチップセットと下位ランクのチップセットで処理スピードは差は無いと考えてよいでしょう。

### Intelチップセット

Intelの第12世代に対応したチップセットで代表的な物は3種類です。

* Z690(上位モデル。オーバークロック可能)
* H670(中位モデル。オーバークロック不可能)
* B660(下位モデル。オーバークロック不可能)

詳しい情報は参考リンクをご利用ください。

* 参考
* [インテル® 600 シリーズ・デスクトップ・チップセット](https://www.intel.co.jp/content/www/jp/ja/products/details/chipsets/desktop-chipsets.html)

### AMDチップセット

AMD Ryzen 5000シリーズに対応した最新チップセットは3種類です。

* X570(上位モデル)
* B550(中位モデル)
* A520(下位モデル)

詳しい情報は参考リンクをご利用ください。

* 参考
* [AMD Ryzen™、第7世代AシリーズおよびAMD Athlon™ デスクトップ・プロセッサー対応](https://www.amd.com/ja/products/chipsets-am4)

## サイズ

マザーボードには大きさの規格が存在します。主流なもので大きい順でATX、Micro-ATX、Mini-ITXの3種類です。PCケースが決まっているならば、**PCケースに対応したマザーボードを選んでください**。

* ATX
* Micro-ATX
* Mini-ITX

## 互換性を確認しよう

CPUとマザーボードの互換性を確認するには、メーカー公式ページが一番正しい情報です。

CPUとマザーボードが対応しているかはマザーボードメーカーの製品ページ→サポート→CPUなどで確認することができます。

GIGABYTEのB550 AORUS PRO AX (rev. 1.0)を例として見方を説明します。他メーカーもほとんど同じページ構成です。

[B550 AORUS PRO AX](https://www.gigabyte.com/jp/Motherboard/B550-AORUS-PRO-AX-rev-10#kf)のページに行き、サポートを選択します。

<img :src="$withBase('/images/docs/\motherBoard/b550_aoru_top.png')" alt="タスクマネージャー2" class="img-center">

サポートページにある**CPUサポートリスト**を選択します。メーカーページにより、CPUと略されている場合があります。

<img :src="$withBase('/images/docs/\motherBoard/b550_aoru_support.png')" alt="タスクマネージャー2" class="img-center">

ページ内にサポートされているCPU情報を確認することができます。

<img :src="$withBase('/images/docs/\motherBoard/b550_aoru_support_cpu.png')" alt="タスクマネージャー2" class="img-center">

## BIOSのバージョン

BIOSにはバージョンが存在します。自身でアップデートが可能です。マザーボードとCPUによりますが、特定以上のBIOSバージョンである必要があります。

例としてB550 AORUS PRO AXではRyzen 9 3950Xは、初期バージョンである「F1」から動作しますが、Ryzen 9 5950Xは「F10」からとなります。つまり、「F1」ではRyzen 9 5950Xは認識しません（動きません）。マザーボードがどのバージョンまでアップデートされているかは店舗次第です。BIOSのバージョンが確認したい場合は店舗に問い合わせるしかありません。

## BIOSのCPUなし更新機能

CPU、メモリが無い状態でBIOSのアップデートを行えるマザーボードがあります。機能名はメーカーにより異なりますが、すべて同じ意味です。

|メーカー|機能名|
|---|---|
|ASRock|BIOS Flashback|
|Asus|BIOS FlashBack|
|GIGABYTE|Q-Flash Plus|
|MSI|Flash BIOS|

### CPUなしのBIOSバージョンアップがない製品で困ること場合も

BIOS Flashbackなどの機能が無い製品の場合は動作するCPUとメモリーが必須になります。つまり載せたいCPUとは別に、動作するCPUが必要となります。パーツを持っている場合は問題ありませんが、持っていない場合はBIOSのために購入が必要になります。

ドスパラやツクモなど一部店舗ではBIOSアップデートサービスを実施している店舗がありますが有償です。不安ならばBIOS Flashbackなどの機能のある製品を選ぶと良いでしょう。

## マザーボードは価格差が大きい

マザーボードの価格はピンきりです。5000円～10万を超える製品まであります。

高い製品の大まかな特徴は

* オーバークロック耐性をもたせるために電源フェーズが耐久性重視
* ボード自体をサーバーグレードの品質にし、反りの防止、信号整合性を向上
* RGB(マザーボード自体が光る)
* RGB LEDヘッダー(別購入したLEDファンなどの光の制御をする)
* BIOS Flashbackなどの機能

