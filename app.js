// 載入express模組
const express = require('express')
// 創建express應用
const app = express()

// 載入Handlebars模組
const { engine } = require('express-handlebars')
// 在Express中啟用hbs.engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// 定義一個路由，處理根目錄的 GET 請求
app.get('/',(req,res) =>{
  res.redirect('/restaurant')
})

// 定義一個路由，處理/restaurant路徑的 GET 請求
app.get('/restaurant', (req, res) => {
  res.send('index')
})

// 定義一個路由，處理/restaurant路徑的 GET 請求
app.get('/restaurant/:id', (req, res) => {
  res.send('Read restaurant ID: ' + req.params.id)
})

// 使用use載入靜態文件檔案(例如json檔)
app.use(express.static('public'))

// 讓應用監聽特定的port
const port = 3000
app.listen(port, () =>{
  console.log(`Server is running on http://localhost:${port}`)
})