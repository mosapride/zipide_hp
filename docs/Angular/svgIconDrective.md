---
title: SVG Icon表示Directiveを作ってみた
description: はじめにSVGとはを語ります。AngularのSVG表示Directiveを参考したい場合はスクロールして下に行ってください。またSVGアニメーションについては触れてません。この記事ではIconに焦点を当ててます。
---

# SVG Icon表示Directiveを作ってみた

## まずはSVGとは

はじめにSVGとはを語ります。AngularのSVG表示Directiveを参考したい場合はスクロールして下に行ってください。またSVGアニメーションについては触れてません。この記事ではIconに焦点を当ててます。

SVG(Scalable Vector Graphics)はXMLベースの、2次元ベクターイメージ用の画像形式。

viewBoxと言うCSSで言うキャンバス内に座標指定したポイント間で線、四角、円などを使い絵を描画する。そのため拡大・縮小を行ったとしても画像が荒く表示されることが無いし、画像データよりもデータサイズが少なく済む。

また、<span class="red-under">条件により</span>色の変化を動的に行うことができる。

<google-ads/>

### Homeの例

下記のソースはHomeの絵。参考元：[https://material.io/resources/icons/?icon=home&style=baseline](https://material.io/resources/icons/?icon=home&style=baseline)

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24">
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
</svg>
```

表示される絵はこのようになる。

<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24">
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
</svg>

### SVGの表示の仕方

SVG初心者の私より、下記サイトがわかりやすいが羅列すると

1. HTML内に直接SVGタグを挿入(Inline SVG)
2. imgタグを利用(src="path/hogehoge.svg")
3. objectタグを利用(data="path/hogehoge.svg")
4. cssのbackground-imageを利用(background-image:url("path/hogehoge.svg"))

[HTML5でのSVGファイル操作のおさらい - Qiita](https://qiita.com/ka215/items/f9834dca40bb3d7e9c8b)

### Inline SVGとimgは使いづらい感想。

Inline SVGはソース上でどのような画像が表示されるのか私にはわからない。その他3種はパスによりsvgファイルが指定されているため、単独でSVG画像の確認ができる。

imgタグは画像として内部で処理を行っているのか色の変化を起こすことができない。これはSVGを使うメリットを崩している気がする。

hover時の色変化を行うSVGの書き方は下記を参考すると良い。

[Change Color of SVG on Hover | CSS-Tricks](https://css-tricks.com/change-color-of-svg-on-hover/)

### Iconとして必要な表示の変化とは

メニューに付随、グットボタン、STAR、ハートマークなどを想定してます。

1. hover時に視覚的変化
2. click時に同一画面上ならば色やicon自体の変化。<br>ただし、他画面の移動やページが大きく変わる場合は不要

と、考えた。

## Angular Directiveで作った。

Iconを前提として作っている。つまりSVG画像は単色。色の変化としては`contrast`を利用することにした。`src`属性からsvgファイルのパスを指定する。表示するIconサイズを変更したい場合はsizeを指定すればよい。ただしデフォルト値として適当に24pxにしている。

```ts
import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appIconSvg]'
})
export class IconSvgDirective implements OnInit {
  @Input() src: string;
  @Input() size? = 24;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    console.log(this.src);
    console.log(this.el.nativeElement.style);
    this.el.nativeElement.style.display = 'inline-block';
    this.el.nativeElement.style.width = this.size + 'px';
    this.el.nativeElement.style.height = this.size + 'px';
    this.el.nativeElement.style.backgroundSize = 'cover';
    this.el.nativeElement.style.backgroundImage = `url(${this.src})`;
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.filter = 'contrast(100%)';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.filter = 'contrast(50%)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.filter = 'contrast(100%)';
  }

}
```

HTML上でのサンプル

```html
<span appIconSvg src="assets/icon/home.svg"></span>

<!-- サイズを128に指定 -->
<span appIconSvg src="assets/icon/home.svg" size="128"></span>
```

クリックイベントなども動作できることを確認した。

```html
<span appIconSvg src="assets/icon/home.svg" (click)="debug()"></span>
```

### Angular MaterialのIconを使ったほうが良いのでは？？

Angular Materialでは`<mat-icon>`Componentとして実装されている。Directiveではない事に注目。

[Angular Material UI component library](https://material.angular.io/components/icon/overview)

さらに外部のSVGも呼ぶ機能もある。

```ts
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-svg-example',
  templateUrl: 'icon-svg-example.html',
  styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
```

正直、こっちを使う方が無難かもしれない。

ただ、色変化の方法が分からなかったので独自で実装した。コード量も多くないし。