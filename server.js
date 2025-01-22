const express = require("express"); // expressモジュールを読み込み
const app = express(); // expressオブジェクトを作成
const PORT = 9000; // ポート番号を指定

app.listen(PORT, () => {
  console.log(`ポート${PORT}で待受中...`);
});
