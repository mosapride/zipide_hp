---
title: ストレージ
description: データを保存するためのPCパーツのことをストレージと言います。ストレージにはSSD、HDDなどのおなじみのものから、新しいM.2規格のストレージも存在します。
---

# ストレージ

<div class="custom-date">
  <i class="far fa-calendar"></i>2022/03/26
  <i class="fas fa-undo-alt"></i>2022/03/26
</div>

<ClientOnly>
  <CallInFeedAdsense />
</ClientOnly>

データを保存するためのPCパーツのことをストレージと言います。ストレージにはSSD、HDDなどのおなじみのものから、新しいM.2規格のストレージも存在します。

<img :src="$withBase('/images/docs/storage/storage_eye_catch.png')" alt="ストレージのアイキャッチ" class="img-center">

## ストレージの種類

<img :src="$withBase('/images/docs/storage/storage_type.png')" alt="ストレージの種類" class="img-center">

<table>
  <thead>
    <tr>
      <th>種類</th>
      <th>規格</th>
      <th>価格</th>
      <th>速度</th>
      <th>特徴</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SSD</td>
      <td class="nowrap">2.5インチ</td>
      <td class="nowrap">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </td>
      <td class="nowrap">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </td>
      <td>
        SATA通信となるためスピードは読み書き500MB/秒ぐらいで頭打ち。しかし必要十分な速度。
      </td>
    </tr>
    <tr>
      <td>HDD</td>
      <td>3.5インチ</td>
      <td>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i>
      </td>
      <td>
        <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </td>
      <td>
        容量単価で最安。スピードは140MB～260MB/秒と差がある。HDDの中にディスクが入っており回転しているため音がする。アーカイブデータの保存としては優秀。
      </td>
    </tr>
    <tr>
      <td>M.2 SSD</td>
      <td>SATA通信</td>
      <td>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </td>
      <td>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </td>
      <td>M.2のSSD接続版。SATA通信となるためスピードは500MB/秒で頭打ち。マザーボードに直接接続するため配線がすっきりする。M.2 SSDを購入するぐらいなら、多少の価格が上がるがM.2 NVMeの購入を勧める</td>
    </tr>
    <tr>
      <td class="nowrap">M.2 NVMe</td>
      <td>PCIe通信</td>
      <td>
        <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </td>
      <td>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i>
      </td>
      <td>M.2のPCIe接続版。高価だがスピードは1000MB～6600MB/秒と高速。マザーボードに直接接続するため配線がすっきりする。</td>
    </tr>
  </tbody>
</table>

## ストレージは何枚必要か

ストレージはデータを保存するために必要になるパーツです。必要とする容量が少なければ1個でも問題ありません。ストレージを２つ積み、Cドライブはアプリケーション用、Dドライブはデータ用などと使い分けることもできます。

## 必要ストレージ容量

今使用しているPCのデータ容量がどれぐらいかはエクスプローラー上で確認ができます。これらの情報から必要容量を確認してください。

<img :src="$withBase('/images/docs/docs/explorer.png')" alt="エクスプローラー" class="img-center">

### Cドライブの容量は余裕が合ったほうが良い

アプリケーションによりインストール先がCドライブに強制だったり、他のドライブを選択することもできますがインストール先はデフォルトのドライブが一番無難です。なぜならば、不具合の原因になったり、場合によってはアプリケーションが破損してしまうからです。

キャッシュデータ(一時データ)の保存にもCドライブが指定されている場合も多く、削除することが難しい場合があります。

導入するアプリケーション容量が把握できている場合は、それに合った容量を購入すれば良いです。アプリケーションを多くいれたりする場合はちょっと多めのストレージを選ぶことにより、ストレージ不足の問題を回避することができます。

### ゲームはどうする

steamではインストール先を選択できるようになっています。ゲームデータのインストール先を高速ストレージにすることで、ロード時間の短縮になり快適にプレイすることができます。金銭的に余裕があればゲーム用にSSDやM.2ストレージを検討するのも良いでしょう。

## HDDはオワコンか

動画や写真などはファイル容量が大きいです。そのような大きなデータを保存する場合はHDDがお勧めです。2022年3月現在ではSSDの1TBが約1万円に比べてHDDは6TBで約1万円と容量単価が安く済みます。

### USBの外付けストレージという選択肢

大きなファイルだけど、いつか使うかもしれないから保存しておこうと思う事は誰でもあると思います。そういう場合はPCにストレージを追加するのではなく、外付けHDDやUSBフラッシュメモリなども検討してみてください。なにも無理くりPC内で解決する必要はありません。

## CドライブはSSDかM.2が良い

SSDまたはM.2ストレージを起動ドライブであるCドライブに指定することにより、パソコンが高速に起動します。

製品にもよりますが、SSDとHDDの起動速度を比べた場合は約3～4倍ほどの差がでてきます。投資に対して体感がよく分かる部分なので、SSDまたはM.2ストレージにしてください。

* 参考
* [SSD起動比較★ win10 pro 64bit★左SSD　右HDD](https://www.youtube.com/watch?v=V280DFblu-g)
* [SSD・HDD性能比較動画](https://www.youtube.com/watch?v=BaLRO0Ojxlc)

### SSDとM.2 NVMeの起動時間を比較したら

SSDの読み書き速度は約500MB/秒、M.2 NVMeの読書速度は商品によりますが、4500MB/秒と約7倍の差があります。しかし、起動時間を計測してみると、7倍の速さはでません。これは、PCの起動にはストレージの速度以外にもCPUやメモリなど他のパーツの力を必要としているためです。価格に対して超高速ストレージは体感できるか微妙なラインですので無理に高価なパーツは余裕があれば選ぶぐらいで良いでしょう。

## M.2タイプの魅力は配線が無いこと

これに尽きます。

M.2タイプのストレージはマザーボードに直接取り付けます。配線ケーブルが一切必要ないため、取り付けも簡単です。

<img :src="$withBase('/images/docs/storage/mdot2_setting.png')" alt="ストレージの種類" class="img-center">

## まとめ

* 必要容量は現在使用しているPCなどから確認する
* CドライブはSSDまたはM.2ストレージにする
* Cドライブは余裕をもった容量の方が得策
* HDDは人によっては不要
