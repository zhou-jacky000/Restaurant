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


// 載入movies.jons的資料，且我們需要的資料位於json檔的result所以後方要加
const restaurants = require('./public/jsons/restaurant.json').results

// 定義一個路由，處理根目錄的 GET 請求
app.get('/',(req,res) =>{
  res.redirect('/restaurant')
})

// 定義一個路由，處理/restaurant路徑的 GET 請求
app.get('/restaurant', (req, res) => {
  res.render('index' ,{restaurants})
})

// 定義一個路由，處理/restaurant路徑的 GET 請求
app.get('/restaurant/:id', (req, res) => {
  // 1.res.send('Read restaurant ID: ' + req.params.id)
  // 2.新增動態路由語帶入資料
  const restaurant = restaurants.find((rs) => rs.id.toString() === req.params.id)
  res.render('show', { restaurant })
})

// 使用use載入靜態文件檔案(例如json檔)
app.use(express.static('public'))

// 讓應用監聽特定的port
const port = 3000
app.listen(port, () =>{
  console.log(`Server is running on http://localhost:${port}`)
})