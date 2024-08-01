// 載入express模組
const express = require('express')
// 創建express應用
const app = express()
// 定義一個路由，處理根目錄的 GET 請求
app.get('/',(req,res) =>{
  res.send('restaurant List')
})
// 讓應用監聽特定的port
const port = 3000
app.listen(port, () =>{
  console.log(`Server is running on http://localhost:${port}`)
})