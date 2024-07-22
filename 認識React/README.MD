#前端三大框架:
##React Vue Angular

Q:React是一個框架還是一個函示庫
React從官網看他是說React是用來實作使用者介面的函式庫
從技術上來說React並不適框架，而是一個用來渲染UI組件的函式庫
React需要搭配其他函示庫來建立使用者介面，在網頁中常使用React Dom搭配
因此我們會稱React為一個框架。

-----------------------------

#React 的優點有：
    * 用純 JS 在前端產生 HTML 
    * 使用 Virtual DOM 重繪效率高
    * 重視「元件」的概念 通用性高
    * 完全用 JS 來操作 UI ，可跟後端分離
    * 容量小、易移植
    * 大部分觀念和 React Native 互通

-----------------------------

#[ 開始載入 React ，並認識擴充套件和資料夾架構 ]
1. npx create-react-app 可以創建專案
2. npm start 可以在本地端跑專案
3. 資料夾架構：
    * index.html 是連接 index.js 的入口頁
    * index.js 負責導入所有元件的入口
    * React 會把 src 資料夾裡的東西編譯好
    * App.js 代表一個可以重複使用的元件
4. 在 Chrome 安裝擴充套件 React Developer Tools ，並打開「允許存取檔案位址」
5. 在 Emmet: Include Languages 設 "Javascript" : "javascriptreact" ，確認 Files Associations 有加上 *.js ，才能在 JSX 使用 Emmet
