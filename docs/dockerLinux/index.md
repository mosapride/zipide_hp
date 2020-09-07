# DockerやLinux

書く。

## Docker for Windowsについて

インストールに関しては[https://docs.docker.jp/docker-for-windows/install.html](https://docs.docker.jp/docker-for-windows/install.html)に書かれているが、高速スタートアップを無効化することをすすめる。

### 高速スタートアップとは

Windows 10から標準で高速スタートアップが有効となっている。機能は**Microsoft公式には詳細を見つけることができなかった**。はっきり言って謎が多い。

ネット情報だと、終了時にデバイス情報を保持し、次回起動時のスピードを上げるようだが、これが**Docker for Windowsと相性が悪い**。具体的な症状はDockerが正常起動しない。この状態になると一度、Dockerを終了させもう一度立ち上げる必要がある。

高速スタートアップ有効時・無効時の起動時間は体感できるほどではないのに不具合報告が多々ある邪魔な機能。

### 高速スタートアップの無効化

コントロールパネルから開くのは面倒なのでエクスプローラーに直接パスを入力して開く。

下記パスをエクスプローラーで開けばよい

```plaintext
コントロール パネル\すべてのコントロール パネル項目\電源オプション
```

![電源オプション](/images/DockerLinux/stop_first1.png)

もう一つの方法は`Windowsキー + r`から`powercfg.cpl`を入力し実行すればよい。

![電源オプション](/images/DockerLinux/stop_first2.png)

**電源ボタンの動作を選択する**をクリック。

![電源ボタン](/images/DockerLinux/stop_first3.png)

**現在利用できない設定を変更します**をクリック。

![現在利用できない設定](/images/DockerLinux/stop_first4.png)

**高速スタートアップを有効にする(推奨)**のチェックを**外す**。

![高速スタートアップ無効化](/images/DockerLinux/stop_first5.png)

`変更の保存`-パソコンの再起動を行う。
