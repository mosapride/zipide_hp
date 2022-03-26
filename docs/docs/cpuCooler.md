---
title: CPUクーラー
description: CPUクーラーはCPUを冷やすためのパーツです。主にサイドフロー、トップフロー、簡易水冷の3種があります。CPUは発熱するため冷やす必要があります。冷却が不十分で上限温度まで到達するとスロットリングを起こしたり、パソコンを強制終了してパソコンの保護を自動的に行います。
---

# CPUクーラー

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/03/02
  <i class="fas fa-undo-alt"></i>2022/03/15
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

CPUクーラーはCPUを冷やすためのパーツです。主にサイドフロー、トップフロー、簡易水冷の3種があります。

<img :src="$withBase('/images/docs/cpuCooler/cpucooler_type.png')" alt="pc monkey" class="img-center">

CPUは発熱するため冷やす必要があります。冷却が不十分で上限温度まで到達するとスロットリングを起こしたり、パソコンを強制終了してパソコンの保護を自動的に行います。

AMD CPU上限温度は90度、Intel CPU上限温度は100度の製品が多いです。

:::tip <i class="fas fa-info-circle"></i> スロットリング
システムの温度が TJ Max (または Tcase) 以上に達したときにクロック速度を下げるインテル® プロセッサーのメカニズムです。これは、プロセッサーを保護し、システムにオーバーヒートの問題があることをユーザーに示すために、監視する必要があることを示します。

[スロットリングとは何ですか?](https://www.intel.co.jp/content/www/jp/ja/support/articles/000088048/processors.html?wapkw=%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E3%83%AA%E3%83%B3%E3%82%B0)
:::

CPUに付属している製品もあります。CPU付属製品のCPUクーラーのことをリテールクーラーと言います。

## PCケースに入る物を選ぶ必要がある

適当に選んでしまうと失敗してしまう可能性があります。

### サイドフロー、トップフローの場合

CPUクーラーの高さ、PCケースの対応CPUクーラーの高さは公式ページを確認する必要があります。PCケースに入り切らずに蓋が閉まらない状態にならないようにしましょう。

#### ASSASIN Ⅲの場合

[ASSASIN Ⅲ-仕様](https://www.gamerstorm.com/jp/product/CPUAIRCOOLER/2019-08/2237_11751.shtml)に製品寸法が記載されています。

<img :src="$withBase('/images/docs/cpuCooler/assasin3.png')" alt="ASSASIN製品仕様" class="img-center">

#### Define Cの場合

[Define C-仕様](https://www.fractal-design.com/ja/products/cases/define/define-c/black/)に**CPU cooler max height**の項目があります。

<img :src="$withBase('/images/docs/cpuCooler/define_c_specification.png')" alt="Define C製品仕様" class="img-center">

### 簡易水冷

簡易水冷の多くの製品は120mmファンを１～３まで搭載しています。

<img :src="$withBase('/images/docs/cpuCooler/kannisuirei.png')" alt="pc monkey" class="img-center">

どのサイズまで対応しているかは、PCケースのマニュアルに記載されている場合が多く、また取り付け位置についてサンプルが記載されています。

<img :src="$withBase('/images/docs/cpuCooler/kannisuirei_define.png')" alt="pc monkey" class="img-center">

## 冷却不足による弊害

スロットリングや、強制終了以外にも冷却不足に陥ると一番問題となるのが**騒音**です。ファンがフル回転して耳障りです。ファンの音を鎮めるために布団をかぶせる人もいるようですが、火事のもとになるので決してやらないでください。

### 適正温度は

適正温度についてはAMD公式、Intel公式からは発表されていません。CPUが動作する最大温度はAMDの場合は90度、Intelの場合は100度と公式に記載されています。処理の重い作業中に指定されている最大温度以下が望ましいです。ネットで調べてみると**負荷時の最大温度は80℃以下**にするのが良いとされています。負荷時にスロットリングや、騒音問題に悩む場合は、高性能なCPUクーラーに買い換えることを検討してください。

アイドル時の温度はPCの環境によりだいぶ変わります。バックグラウンドで動作しているアプリが多い場合には必然的にアイドル時にも温度が高くなりますが、それでも**70℃以下**ならば問題なと考えます。

:::tip <i class="fas fa-info-circle"></i> アイドル
アイドル状態とは、ある一定の時間処理が行われていないときに、処理が必要ないとパソコンは判断してアイドル状態(何もしていない状態)になります。 別の言葉では「待機状態」に入るとも言えます。

[PCのアイドル状態とは待機状態の事です。はい終わり！ | パソコンの問題を改善?](https://pc-kaizen.com/what-is-idle#:~:text=%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E7%8A%B6%E6%85%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-,%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E7%8A%B6%E6%85%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6,%E3%81%AB%E5%85%A5%E3%82%8B%E3%81%A8%E3%82%82%E8%A8%80%E3%81%88%E3%81%BE%E3%81%99%E3%80%82)
:::

自作を行ったら、[HW Monitor](https://www.cpuid.com/softwares/hwmonitor.html)などのツールを使用し、CPUの温度を確認することをオススメします。

### Cinebench実行時の温度は当てにならない？

[Cinebench](https://www.maxon.net/ja/downloads)とはPCの処理性能を測るソフトです。CPUの処理速度を計測するときによく使われます。また、計測中のCPU温度を図り、CPUクーラーの性能評価にも利用されます。Cinebenchでの計測中に80℃以下なら問題ないと言い切れますが、普段使いでここまでの負荷を掛けるのかと聞かれると疑問に思います。自分の重い処理中の温度を基準にすると良いでしょう。
