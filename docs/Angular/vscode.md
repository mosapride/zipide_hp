---
title: VS Codeの拡張機能とデバック設定
description: Angularプロジェクトを快適にコーディングするためのVS Codeの拡張機能とデバック設定について
---

# VS Codeの拡張機能とデバック設定

Angularプロジェクトを快適にコーディングするためのVS Codeの拡張機能とデバック設定について

## 拡張機能

* [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)
  * Angularプロジェクトに便利な拡張機能の一式をインストールしてくれる。
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  * Chromeでのデバックに必要。
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  * ファイルフォーマッタ。
* [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
  * TSLintは2019年に廃止されESLintへの移行が勧められてるがAngular10時点ではまだ対応されてない。
  * 参考：github - angular/angular-cli - issues [Migration to ESLint](https://github.com/angular/angular-cli/issues/13732)

## Angularプロジェクトのデバック設定

作業ルートディレクトリに`.vscode`フォルダを作り、その下に`launch.json`ファイルを作成する。

`.vscode/launch.json`の内容

```json
{
  "version": "0.2.0",
  "configurations": [
      {
          "type": "chrome",
          "request": "launch",
          "name": "Launch Chrome against localhost",
          "url": "http://localhost:4200",
          "webRoot": "${workspaceFolder}"
      },
      {
          "type": "chrome",
          "request": "attach",
          "name": "Attach to Chrome",
          "port": 9222,
          "webRoot": "${workspaceFolder}"
      }
  ]
}
```

`F5`キーでデバックモードで動作し、ブレークポイントなど実行できる。
