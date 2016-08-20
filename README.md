# three.js-guide-cursor
three.js で原点に座標カーソルを表示する

<img src="http://img.f.hatena.ne.jp/images/fotolife/m/macperl/20160819/20160819214153.png" width="300" height="300">

## Usage
```
<script src="./js/three_guide_cursor.js"></script> // 読み込み

var scene = new THREE.Scene();

var guide = new ThreeGuideCursor({scene: scene}); // シーンを渡して宣言
guide.scale = 10; // 大きくするなら
guide.render();  // シーンに追加
```
