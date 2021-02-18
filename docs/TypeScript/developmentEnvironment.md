---
title: 開発環境構築
description: 公式通りに設定するとバージョンが固定され使いにくい。nvm経由からインストールすることを勧める。
---

# 開発環境構築

## install nvm Windows編

[nvm-windows](https://github.com/coreybutler/nvm-windows)を利用した例の紹介。

[nvm-windows Releses](https://github.com/coreybutler/nvm-windows/releases)から`nvm-setup.zip`をダウンロード・解凍を行う。`nvm-setup.exe`を実行しダイアログに従いインストールを行う。

インストール後、PATHを確実に有効化するためにPCの再起動を行う。

再起動後、コマンドプロンプトまたはPowerShellを起動し、`nvm version`を実行し、バージョンが表示されれば成功。

```atom
PS C:\> nvm version
1.1.7
```

今の状態ではnvmがインストールされた状態であり、node.jsは未インスール状態である。node.jsをインストールを行うために`nvm list available`コマンドを利用しインストール可能なバージョンを確認する。

```atom
PS C:\> nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    14.9.0    |   12.18.3    |   0.12.18    |   0.11.16    |
|    14.8.0    |   12.18.2    |   0.12.17    |   0.11.15    |
|    14.7.0    |   12.18.1    |   0.12.16    |   0.11.14    |
|    14.6.0    |   12.18.0    |   0.12.15    |   0.11.13    |
|    14.5.0    |   12.17.0    |   0.12.14    |   0.11.12    |
```

この場合はv12.18.3がLTSの最新版だと言うことがわかる。インストールには`nvm install バージョン`を実行する。

```atom
nvm install 12.18.3
```

インストール後、`nvm use バージョン`を実行する。これはデフォルトで実行するnode.jsのバージョンを指定するためのもの。

```atom
nvm use 12.18.3
```

最後に`node -v`コマンドで正常にインストールされたか確認を行う。

```atom
PS C:\> node -v
v12.18.3
```

<google-ads/>

## install nvm macOS、Linux編

[nvm-sh/nvm](https://github.com/nvm-sh/nvm)を利用した例の紹介。

インストールにはgitコマンドが必要になる。macOSの場合、OS X 10.9以降はgitをインストールする必要があるためXcodeのインストールをすることをお勧めする。Xcodeと同時にgitも自動にインストールされる。

XcodeはApp Storeからインストールすることができる。結構重い。Xcodeインストール後にターミナルからスクリプトを記述しnvmのインストールを行う。**ここではv0.35.3をインストールしている。最新バージョンをインストールする場合は[公式ページ](https://github.com/nvm-sh/nvm)からバージョンを確認すること**。

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

PATHを通すために`~/.bash_profile`を作成しexport文を追加する。

```atom
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

PATHの読み込みのため、ターミナルの再起動を行うか、`source ~/.bash_profile`コマンドの実行を行う。その後、`nvm --version`を実行しバージョンが表示されればnvmのインストールは成功。

今の状態ではnvmがインストールされた状態であり、node.jsは未インスール状態である。node.jsをインストールを行うために`nvm ls-remote`コマンドを利用しインストール可能なバージョンを確認する。

```bash
$ nvm ls-remote
     ・・・・
       v12.18.1   (LTS: Erbium)
       v12.18.2   (LTS: Erbium)
       v12.18.3   (Latest LTS: Erbium)
        v13.0.0
    ・・・・
```

インストールしたいバージョンを指定し、`nvm install バージョン`コマンドを実行する。

```bash
nvm install v12.18.3
```

インストール後、`nvm alias default バージョン`を実行する。これはデフォルトで実行するnode.jsのバージョンを指定するためのもの。

```bash
nvm alias default v12.18.3
```

最後に`node -v`コマンドで正常にインストールされたか確認を行う。

```bash
$ node -v
v12.18.3
```

## TypeScript

任意のワークディレクトリに移動し、ターミナルから`npm init -y`を実行し、package.jsonを作成する

```bash
npm init -y
```

`npm install`コマンドを使用しtypescriptコンパイラをインストールする。

```bash
npm install typescript
```

package.jsonのscriptタグ無いに`"tsc": "tsc"`を追加する。

```json
{
  "name": "work",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tsc": "tsc"  // これを追加
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "typescript": "^4.0.2"
  }
}
```

`npm run tsc -- -v`を実行しバージョンが表示されれば大丈夫。

```bash
$ npm run tsc -- -v
```
