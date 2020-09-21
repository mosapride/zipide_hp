---
title: npxでng new
description: npmではなくnpxコマンドでngコマンドを実行し、angularプロジェクトを作成する。
---

# npxでng new

npmではなくnpxコマンドでngコマンドを実行し、angularプロジェクトを作成する。

<google-ads/>

## 公式ではグローバルインストールしている

[angular.io](https://angular.io)のドキュメントでは`npm install -g @angular/cli`と記載されてるが、Angular CLIで作られたプロジェクトには`angular/cli`がインストールされてる。

`@angular/cli`の`ng`コマンドがグローバルとローカルの２つ入ってしまう。バージョンの差異が生じる可能性もある。グローバルインストールをすすめる意味がわからない。

## sample-projectの作成

npm 5.2.0以上でnpxコマンドが利用可能。sample-projectを作成するには下記のようになる。

```bash
npx -p @angular/cli ng new sample-project
```

## ngコマンドはnpm runで

`ng new`で作成されたプロジェクトの`package.json`の中の`script`には`ng`コマンドが登録されている。コンポーネント作成などで`ng`コマンドを使いたい場合は`npm run ng`から実行すればよい。

```bash
## hogeコンポーネントの作成例
npm run ng g component hoge
```

`npx -p`コマンドではパッケージ(この場合@angular/cli)を落とし、コマンドを実行することができる。一時的に落としその後削除されるため１度しか使用しないコマンドに非常に最適。プロジェクト作成のためだけにグローバルインストールし、その後は使用しないのではストレージ容量の無駄遣い。
