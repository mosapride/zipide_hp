---
title: OS
description: 2022年現在ではWindows 10とWindows 11の選択があります。Windows 10のサポート期限は2025年10月14日となっています。まだ3年近く余裕があるため急いで新しいWindows 11にする必要はありません。
---

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/02/07
  <i class="fas fa-undo-alt"></i>2022/02/07
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

# OS

OS【Operating System】オーエス、オペレーティング・システムと呼ばれます。

OSにはWindows OS、Mac OS、Unix、Linuxなどありがますが、自作PCならばWindows OS一択です。

<img :src="$withBase('/images/docs/os/windows_eye_catch.png')" alt="Windowsエディション" class="img-center">

## Windows 10か11か

2022年現在ではWindows 10とWindows 11の選択があります。Windows 10のサポート期限は2025年10月14日となっています。まだ3年近く余裕があるため急いで新しいWindows 11にする必要はありません。

Windows 10から11にアップデートは期間付きですが、無料となります。その期間については終了日は設けていないため今現在はわかりません。とりあえず10を購入し、不満があれば11にアップデートすることも可能です。

> 無料のアップグレードが可能な期間はいつまでですか?  
> 対象となるシステムに対する無料アップグレードに特定の終了日は設けていません。しかし、Microsoft は無料アップグレードに対するサポートをいずれ終了する権利を留保します。この終了日が 2022 年 10 月 5 日より前になることはありません。

安定性を求めているなら10を、新しい機能を試したい人は11。11を使っていて不満があれば10に再インストールすることも可能です。

* 参考
* <https://docs.microsoft.com/ja-jp/lifecycle/products/windows-10-home-and-pro>
* <https://www.microsoft.com/ja-jp/windows/get-windows-11?ocid=GetW11-SMC&r=1>
* <https://www.microsoft.com/ja-jp/biz/windows/windowsdowngrade.aspx>

## 32bitは過去の遺物

<img :src="$withBase('/images/docs/os/windows_64.png')" alt="Windowsエディション" class="img-center">

OSには32bit、64bitの2種類があります。一度入れてしまうとクリーンインストールを行わない限り変更することができません。かならず64bitを選択しましょう。
32bit OSはサポートする最大メモリサイズが4GBまでとなっています。さらに64bit対応アプリケーションを動かすことはできません。

64bit OSはサポートする最大メモリサイズがWindows 10 Homeは128GB、Proの場合は2TBとなっています。32bit対応アプリケーションも下位互換があり動かすことができます。

## WindowsのEditionと販売形態

結論から言うと、「Windows 10 Home USBフラッシュメモリ」が一番無難。

<img :src="$withBase('/images/docs/os/windows-edition.png')" alt="Windowsエディション" class="img-center">

### HomeとProの違い

簡単に説明すると、Homeは個人用、Proは法人用となります。

Proの場合かつ、Windowsサーバーを利用する場合は[Active Directory](https://docs.microsoft.com/ja-jp/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview)機能を利用し、ログインの認証、ファイル共有、セキュリティ設定などを行えます。個人では必要ありません。

* 参考
* [Windows 10 Home と Pro の違い | Microsoft Windows](https://www.microsoft.com/ja-jp/windows/compare-windows-10-home-vs-pro)
* [Active Directory Domain Services の概要](https://docs.microsoft.com/ja-jp/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview)

### DSPは避けるべき

DSP版はデバイスやPCパーツとセットで販売されます。そしてセットで購入したパーツをPCに組み込む必要があります。つまり、セットで購入したパーツが壊れたらライセンスが無くなります。
OSは高価ですので、安易に安いからDSPで良いとは考えないでください。OSは取り回しが効きやすい必要なソフトなので、数年後に新しいパソコンに組み直す場合にほぼ確実に取り回しが効きます。

## 極端に安いOSは避けるべき

現実問題として非正規版のWindowsが格安で販売されています。オークションや個人通販サイトでの購入は避けてください。商品名や商品説明欄に正規品と書かれていますが非正規品です。

Windows OSの価格はどこで買ってもほぼ同じです。Amazonで購入する場合は、販売先がAmazonになっていることを確認してください。不安があるかたは有名な店舗で購入すると間違いがありません。

* 参考
* [非正規品の Windows にご注意ください。 - Microsoft Windows](https://www.microsoft.com/ja-jp/windows/prodinfo/default.aspx)

