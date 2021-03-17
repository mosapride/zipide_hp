---
title: Typescriptでバックエンド側 開発環境する
description: node.js + TypeScript + VS Code + eslint + prettierを使ってNode.js API Server + front-end projectの開発環境構築を行う。ここではWebフレームワークにexpressを使用しているが他のWebフレームワークでも問題ない。
---

# Typescriptエンド側 開発環境

node.js + TypeScript + VS Code + eslint + prettierを使ってNode.js API Server + back-end projectの開発環境構築を行う。

ここではWebフレームワークにexpressを使用しているが他のWebフレームワークでも問題ない(はず)。

Microsoftがgithubで公開している[TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter)もある。安定を求めるなら大企業が公開している雛形プロジェクトを使用するほうが無難。

<google-ads/>

## 主な開発構成

* Editor
  * VS Code
  * Microsoftが開発しているフリーのプログラミングエディタ
  * [https://code.visualstudio.com/](https://code.visualstudio.com/)
* 言語
  * TypeScript
  * [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
* メインFW
  * express
  * Webフレームワーク
  * [https://expressjs.com/](https://expressjs.com/)
* パッケージ
  * eslint
    * ECMAScriptの構文チェッカー
    * [https://eslint.org/](https://eslint.org/)
  * prettier
    * コードフォーマッター
    * [https://prettier.io/](https://prettier.io/)

eslintにもフォーマット機能が存在するみたいだけど、prettierに任せる方式を取る。

## Introduction

Webサーバ(API Server含む)などの常駐するプロセスのための開発用と言うことを再度掲示しておく。

* `npm start`でプロジェクトを実行し、開発を行う。デバックはVS Codeのattach(`F5`)により実行中のプロジェクトを監視・デバックを可能とする。
* 開発中のコンパイルはコードを監視し変更が行われれば自動コンパイルを行う。面倒な作業はできるだけ自動化。
* 構文チェッカー(eslint)、フォーマッタ(prettier)はVS Code上でリアルタイムに行うことにより開発効率を上げる。
* リリースは`npm run build`にて最終コンパイルされたファイルを本番サーバーに転送し、`node index.js`コマンドを実行することによりサーバーを建てることとなる。

## ワークスペースの作成

任意のディレクトリにワークスペースを作成し、VS Codeで開く。

```atom
mkdir workspace
code workspace
```

## VS Codeの設定

空のワークスペースを開いたらルートディレクトリに`.vscode`ディレクトリを作成する。

### extensions.json

`extensions.json`は拡張機能のVS Code必須プラグインを表示してくる。すでにインストールされている場合は何も変化は無いが、未インスンストールの場合は警告してくれる。

`.vscode/extensions.json`

```json
{
  "recommendations": ["dbaeumer.vscode-eslint" , "esbenp.prettier-vscode"]
}
```

VS Codeの拡張機能を統一化するために記載していが手動でインストールする場合は必須ではない。ただし複数人や複数PCで開発する場合は拡張機能の入れ忘れ防止に役立つ。

### launch.json

`launch.json`はデバック設定を記載する、本環境ではターミナルからexpressサーバーを起動させ、VS Codeからattachさせる方式を取る。

`.vscode/launch.json`

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387

  // https://gist.github.com/cecilemuller/2963155d0f249c1544289b78a1cdd695
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Node: Nodemon",
      "restart": true,
      "protocol": "inspector",
      "port": 9229
    }
  ]
}
```

### settings.json

`settings.json`はユーザー設定の上書きをするために使用する。`.vscode/settings.json`に記載された設定は、そのワークスペースのみ有効となるため、グローバル設定の汚染を防ぐ目的や、プロジェクト管理内に設定情報を保存することにより設定差違を防ぐ目的を持つ。

`.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["typescript"],
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "search.exclude": {
    "**/node_modules": true
  }
}
```

## package.jsonの作成

空のpackage.jsonを作成する。

```atom
npm init -y
```

## git関係

git管理をしない場合はこの項目は不要

### git初期化

```atom
git init
```

### gitigunoreの作成

ルートディレクリに`.gitignore`ファイルを新規作成し、下記内容にコピペする。正直、`dist`と`node_modules`だけでもよいかもしれないね

`.gitignore`

```atom
# OS X
.DS_Store*
Icon?
._*

# dist
dist/*

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
.directory
*~


# npm
node_modules
package-lock.json
*.log
*.gz


# Coveralls
coverage

# Benchmarking
benchmarks/graphs

```

## npm install

`npm install`からパッケージをインストールしていく。`--save`オプションは今現在デフォルトオプションになっているが一応明示しておく。

### TypeScript本体と、開発効率アップするためのパッケージ

typescriptコンパイラと、その他便利なパッケージを入れておく。

```bash
npm install typescript --save
npm install nodemon ts-node tsconfig-paths concurrently --save-dev
```

* typescript
  * typescriptコンパイラ
* nodemon
  * nodeプロセスをデーモン化する
* ts-node
  * tsファイルを直接実行できる
* tsconfig-paths
  * tsconfig.jsonからモジュールをロードとAPI経由のロードをサポートする
* concurrently
  * 複数のコマンドを同時に実行する

### eslintとprettier

バージョンを固定させるために`--save-exact`オプションを追加してインストールする

```bash
npm install --save-dev --save-exact eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install --save-dev --save-exact prettier eslint-config-prettier eslint-plugin-prettier
```

* eslint
  * ECMAScriptの構文チェッカー
  * [https://github.com/eslint/eslint](https://github.com/eslint/eslint)
* @typescript-eslint/parser
  * 構文解析
  * [https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
* @typescript-eslint/eslint-plugin
  * recommended(おすすめ)ルールを定義したプラグイン 
  * [https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
* prettier
  * コードフォーマッタ
  * [https://prettier.io/](https://prettier.io/)
* eslint-plugin-prettier
  * ESlintとPrettierを連動させるプラグイン
  * [https://github.com/prettier/eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* eslint-config-prettier
  * ESLintと競合する設定や不備のあるルールをオフにする。簡単に言うと互換プラグインのようなもの
  * [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

## tsconfig.jsonの新規作成

`tsconfig.json`はTypeScriptのコンパイル設定ファイル。

ルートディレクトリに`tsconfig.json`を作成する。作成するコードを管理するディレクトリを`src`、出力されるファイル群は`dist`とした。

* src
  * ソース・ファイル管理ディレクトリ
* dist
  * 出力ディレクトリ

`tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

## nodemon.jsonの新規作成

`nodemon.json`はnodeプロセスをデーモン化する設定ファイル。

ルートディレクトリに`nodemon.json`を作成する

`nodemon.json`

```json
{
  "watch": "./src/**/*.ts",
  "execMap": {
    "ts": "ts-node"
  },
  "ignore": ["src/**/*.spec.ts"],
  "exec" : "node --inspect=9229 -r ts-node/register -r tsconfig-paths/register"
}
```

`inspect=9229`はデバック時のattachポート番号となる。任意のポート番号に変更が可能だが、`.vscode/launch.json`の`port`と合わせる必要がある。

もし、他PCから接続したい場合はIPアドレスを全許可するように設定してもよい

```json
// すべてのIPアドレスから接続可能。ただしパソコンのファイアーウォールも許可しておかないと見れない可能性あり。
  "exec" : "node --inspect=0.0.0.0:9229 -r ts-node/register -r tsconfig-paths/register"
```

## package.json-scriptの編集

`package.json`の`script`部を修正する。

```json
//　・・・・
  "scripts": {
    "start": "concurrently -k \"npm run watch\" \"npm run serve:dev \"",
    "build": "tsc",
    "serve:prod": "node ./dist/release-build.js",
    "serve:dev": "nodemon ./src/index.ts",
    "watch": "tsc -w",
    "tsc": "tsc",
    "eslint": "eslint",
    "lint": "tsc --noEmit && eslint \"./src/**/*.ts\" --quiet --fix"
  },
//　・・・・
```

### eslintrcの作成

eslintのルールを記述したファイル`.eslint.json`は`eslint --init`コマンドにより作成することができる。すでに自分好みの`eslint.json`が存在する場合はそれを利用したほうが良い。

```bash
npm run eslint -- --init
```

対話が終了すると`.eslintrc.json`ファイルが作成される。

下記は私が使用している設定ファイル

`.eslintrc.json`

```json
{
  "root": true,
  "env": {
    "commonjs": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": "off",
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "@typescript-eslint/explicit-module-boundary-types" : ["off"],
    "@typescript-eslint/semi": ["error"]
  }
}

```

各種の説明

```json
{
  "root": true,
  "env": {
    "commonjs": true,
    "es2020": true,
    "node": true
  },
  "extends": [  // 継承するルールとかプラグイン関係。同じルールがある場合は下の方が有効になる
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "project": "./tsconfig.json"   // tsconfig.jsonの場所
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "indent": ["error", 2],   // インデントはスペース２つ
    "linebreak-style": ["error", "unix"],  // 改行コードはunix（Linuxサーバーで動かすため）
    "quotes": ["error", "single"], // 文字列はシングルクォーテーションに強制
    "semi": "off",  // セミコロンを強制JS用？
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],  // 連続した空行は最大２つまで
    "no-console": ["error", { "allow": ["warn", "error"] }],    // console.xxxの使用禁止
    "@typescript-eslint/explicit-module-boundary-types" : ["off"], // 戻り値の型は明示しなくてよい
    "@typescript-eslint/semi": ["error"]  // セミコロンを強制JS用？
  }
}
```

### .eslintignoreの作成

ルートディレクトリに`.eslintignore`ファイルを作成する。

`.eslintignore`

```atom
# /node_modules/* in the project root is ignored by default
# build artefacts
dist/*
coverage/*
# data definition files
**/*.d.ts
# 3rd party libs
/src/public/
# custom definition files
/src/types/
```

### .prettierrcの新規作成

ルートディレクトリに`.prettierrc`を作成する。

`.prettierrc`

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 150,
  "rangeStart": 1,
  "endOfLine":"auto"
}
```

eslintとルールがかぶった場合はprettierが優先される。
