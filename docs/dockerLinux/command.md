# Dockerでよく使うコマンド

Docker for Windowsの場合は**PowerShell**を利用刷ることを想定。コマンドプロンプトでは`$`などの特殊処理を解釈できずに動作しない場合がある。

Dockerコマンドの一覧表ではなく、応用した中で良く使うコマンド。

## 停止中のコンテナを削除

```plaintext
docker rm  $(docker ps -f status=exited -q)
```

## すべてのコンテナを削除

**使用に注意が必要**。起動中のコンテナも含めすべて削除する。`rm -f`の`-f`はコンテナをSIGKILLを送り停止させ削除する。

```plaintext
docker rm -f $(docker ps -a -q)
```

## none imageの削除

buildエラーなどで`<none>`状態になっているimageを削除する。

```plaintext
docker rmi $(docker images -f "dangling=true" -q)
```

## コンテナが使用していないimageの削除

コンテナが使用していないimageを削除する。

```plaintext
docker image prune -a
```

## 停止しているコンテナ情報を出力

```plaintext
docker ps -f status=exited
```

CONTAINER IDのみ出力する場合は`-q`オプションを付ける。

```plaintext
docker ps -f status=exited -q
```

## 名前の部分一致のコンテナ情報を出力

下記の例では`keyword`の文字列が入ったコンテナ情報を出力する。test_keyword_container、hoge_keyword_containerなどコンテナ名が部分一致したコンテナ名となる。

```plaintext
docker ps -f "name=keyword"
```

CONTAINER IDのみ出力する場合は`-q`オプションを付ける。

```plaintext
docker ps -f "name=keyword" -q
```

## 名前の部分一致のコンテナを削除

プロジェクト毎やテスト用コンテナに特定の名称を統一して付けている場合に便利。

例えば、`test`をテスト用コンテナは必ず付けるとします。test-web-server、test-databaseなど複数コンテナが存在しる場合で消す時に役に立つ。

```plaintext
docker rm $(docker ps -f "name=test")
```
