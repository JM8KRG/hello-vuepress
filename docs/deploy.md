# デプロイ
## デプロイする
```bash
vuepress build
```
`.vuepress/dist/`にファイルが出力されています。  この`dist`ディレクトリをWEBサーバーに設置するだけでデプロイ完了です！

:::warning 注意
`.vuepress/config.js`の*base*をデプロイ先の環境に合わせて変更してください。
:::