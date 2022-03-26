---
title: マザーボード
description: マザーボードはすべてのパーツを接続するための部品です。CPU、CPUクーラー、メモリ、ストレージ、電源ユニットすべてが接続されます。見るべきところはチップセットとサイズになります。互換性が無いCPUとマザーボードの組み合わせをした場合は、形自体が違うため組み込むこと自体ができません。
---

# マザーボード

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/02/13
  <i class="fas fa-undo-alt"></i>2022/03/26
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

マザーボードはすべてのパーツを接続するための部品です。CPU、CPUクーラー、メモリ、ストレージ、電源ユニットすべてが接続されます。

PCケースとCPUが決まっている場合は見るべきところはチップセットとファームファクタ(サイズ)になります。マザーボードが決まったら対応しているメモリの規格も確認しておきます。

<img :src="$withBase('/images/docs/motherBoard/mother_eye_catch.png')" alt="マザーボードはすべてを繋ぐ" class="img-center">

## CPUと互換性があるマザーボードを選ぼう

マザーボードにはチップセットと呼ばれる部品が内蔵されています。CPUとチップセットには対応する製品があるため、対応していないCPUとマザーボードの組み合わせにしてしまうと動作しません。

> チップセットとは「ブリッジ」とも呼ばれ、パソコンに搭載されているパーツや機器の橋渡しをする、マザーボードやCPUなどに存在する集積回路となります。
> [参考](https://www.dospara.co.jp/5info/cts_str_parts_chipset)

<img :src="$withBase('/images/docs/motherBoard/AMD-Ryzen-Support-Matrix.jpg')" alt="Ryzenチップセット" class="img-center" style="max-width:80%">

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

マザーボードには大きさの規格が存在します。主流なもので大きい順でATX、Micro-ATX、Mini-ITXの3種類です。PCケースが決まっているならば、基本は**PCケースに対応したマザーボードを選んでください**。

* ATX
* Micro-ATX
* Mini-ITX

<img :src="$withBase('/images/docs/motherBoard/mother_size.png')" alt="マザーボードのサイズ" class="img-center">

大きなマザーボードが拡張性に優れているのはPCIスロットの個数によるところが大きいです。ATXの場合は最大PCI数は7となりますが、実際はこれよりかなり数が少ないです。PCIeスロットの用途は主にグラフィックボードを取り付ける箇所になります。

<img :src="$withBase('/images/docs/motherBoard/mother_pcieslot.png')" alt="PCIeスロット" class="img-center">

PCIeスロットはグラフィックボード以外にもビデオキャプチャーやサウンドカード、ネットワークカード(Wifi)などに使用します。しかし、グラフィックボード以外の製品はUSB対応製品が存在するため、必ずしも多くのPCIeスロットが必要ではありません。ビデオキャプチャーやサウンドカードにこだわりがあり、PCIeスロットが必要な場合は製品をよく見て選んでください。

## 互換性を確認しよう

CPUとマザーボードの互換性を確認するには、メーカー公式ページが一番正しい情報です。

### 対応CPUを確認する

CPUとマザーボードが対応しているかはマザーボードメーカーの製品ページ→サポート→CPUなどで確認することができます。

GIGABYTEのB550 AORUS PRO AX (rev. 1.0)を例として見方を説明します。他メーカーもほとんど同じページ構成です。

[B550 AORUS PRO AX](https://www.gigabyte.com/jp/Motherboard/B550-AORUS-PRO-AX-rev-10#kf)のページに行き、サポートを選択します。

<img :src="$withBase('/images/docs/motherBoard/b550_aoru_top.png')" alt="サポート" class="img-center">

サポートページにある**CPUサポートリスト**を選択します。メーカーページにより、CPUと略されている場合があります。

<img :src="$withBase('/images/docs/motherBoard/b550_aoru_support.png')" alt="CPUサポートリスト１" class="img-center">

ページ内にサポートされているCPU情報を確認することができます。

<img :src="$withBase('/images/docs/motherBoard/b550_aoru_support_cpu.png')" alt="CPUサポートリスト２" class="img-center">

#### BIOSのバージョン

BIOSにはバージョンが存在します。自身でアップデートが可能です。マザーボードとCPUによりますが、特定以上のBIOSバージョンである必要があります。

例としてB550 AORUS PRO AXではRyzen 9 3950Xは、初期バージョンである「F1」から動作しますが、Ryzen 9 5950Xは「F10」からとなります。つまり、「F1」ではRyzen 9 5950Xは認識しません（動きません）。マザーボードがどのバージョンまでアップデートされているかは店舗次第です。BIOSのバージョンが確認したい場合は店舗に問い合わせるしかありません。

### 対応メモリ

2022年3月現在では、マザーボードが対応するメモリ規格はDDR4とDDR5が主流です。マザーボードの対応するメモリと、差すメモリの規格が違うと物理的に刺さりません。間違った規格をさせないように切り欠きの箇所が異なります。

<img :src="$withBase('/images/docs/motherBoard/mother_memoryddr4_ddr5.png')" alt="DDR4とDDR5の違い" class="img-center">

対応するメモリはスペック表に記載されています。必ず確認してください。

<img :src="$withBase('/images/docs/motherBoard/spec_memory.png')" alt="DDR4とDDR5の違い" class="img-center">

DDR4,5のあとに数値が書かれています。この数値は動作周波数を示し、数値が高いほど高速となります。

#### メモリの相性問題

マザーボードとメモリは相性問題があります。マザーボードメーカーは検証した動作するメモリのリストを公開していますが、高価だったり、日本では未発売だったりします。メーカー検証済みメモリを入手するのが一番無難ではありますが、簡単ではない場合があります。口コミやメーカーなどで選ぶしかない状況もあるでしょう。

しかし、メモリメーカーは独自に相性保証をしていたりします。相性保証サービスを行っている店舗もあります。有効活用してください。

* 参考リンク
* [CFD-メモリ相性保証サービス](https://www.cfd.co.jp/support/contact/memory_compatibility/)
* [ドスパラ-ドスパラのメモリ相性保証](https://www.dospara.co.jp/5info/cts_parts_aisyou)
* [TSUKUMO-ツクモ交換保証 詳細](https://support.tsukumo.co.jp/contents/change_hosyo_details/)

## BIOSのCPUなし更新機能

CPU、メモリが無い状態でBIOSのアップデートを行えるマザーボードがあります。機能名はメーカーにより異なりますが、すべて同じ意味です。

|メーカー|機能名|
|---|---|
|ASRock|BIOS Flashback|
|Asus|BIOS FlashBack|
|GIGABYTE|Q-Flash Plus|
|MSI|Flash BIOS|

### CPUなしのBIOSバージョンアップがない製品で困ること場合も

BIOS Flashbackなどの機能が無い製品の場合は動作するCPUとメモリが必須になります。つまり載せたいCPUとは別に、動作するCPUが必要となります。パーツを持っている場合は問題ありませんが、持っていない場合はBIOSのために購入が必要になります。

ドスパラやツクモなど一部店舗ではBIOSアップデートサービスを実施している店舗がありますが有償です。不安ならばBIOS Flashbackなどの機能のある製品を選ぶと良いでしょう。

## マザーボードは価格差が大きい

マザーボードの価格はピンきりです。5000円～10万を超える製品まであります。

高い製品の大まかな特徴は

* オーバークロック耐性をもたせるために電源フェーズが耐久性重視
* ボード自体をサーバーグレードの品質にし、反りの防止、信号整合性を向上
* 冷却能力の高いヒートシンクを採用
* RGB(マザーボード自体が光る)
* RGB LEDヘッダー(別購入したLEDファンなどの光の制御をする)
* BIOS Flashbackなどの機能

## ほどほどに安いので十分

マザーボードの性能で処理性能は左右されません。個人的にはオーバークロックは推奨しないため高耐久なマザーボードは必要ありません。マザーボードはCPUとの互換があるため、流用できるか不明確なパーツなので過度な高級マザーボードは趣味の領域です。

高価なマザーボードほど、ヒートシンクがしっかりして冷却能力が高いです。しかし、ヒートシンクが大きいからこそ、CPUクーラーの干渉問題が出てくることがあります。さらに対応CPUクーラーなどのリストが存在しないため対応策が無いのが現状です。

つまり、安いので十分って話です。
