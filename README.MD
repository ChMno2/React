
# 前端三大框架:React

## React Vue Angular

Q:React是一個框架還是一個函示庫
React從官網看他是說React是用來實作使用者介面的函式庫
從技術上來說React並不適框架，而是一個用來渲染UI組件的函式庫
React需要搭配其他函示庫來建立使用者介面，在網頁中常使用React Dom搭配
因此我們會稱React為一個框架。

-----------------------------

# React 的優點有：
    * 用純 JS 在前端產生 HTML 
    * 使用 Virtual DOM 重繪效率高
    * 重視「元件」的概念 通用性高
    * 完全用 JS 來操作 UI ，可跟後端分離
    * 容量小、易移植
    * 大部分觀念和 React Native 互通

-----------------------------

# [ 開始載入 React ，並認識擴充套件和資料夾架構 ]
1. npx create-react-app 可以創建專案
2. npm start 可以在本地端跑專案
3. 資料夾架構：
    * index.html 是連接 index.js 的入口頁
    * index.js 負責導入所有元件的入口
    * React 會把 src 資料夾裡的東西編譯好
    * App.js 代表一個可以重複使用的元件
4. 在 Chrome 安裝擴充套件 React Developer Tools ，並打開「允許存取檔案位址」
5. 在 Emmet: Include Languages 設 "Javascript" : "javascriptreact" ，確認 Files Associations 有加上 *.js ，才能在 JSX 使用 Emmet

-----------------------------

# JSX
JSX是一種JS語法擴充、語法糖，用比較簡約的方式讓JS操控DOM

1. 好處：
    * 寫起來簡單
    * 可以實現聲明式寫法
    * 不需要使用額外的模板語言
2. 注意：
    * 最外層只能包一個根節點
    * 樣式要使用 className ，因為 JS 裡已經用掉 class 這個名稱了
    * 行內樣式 style={{ }} ，搭配小駝峰寫法如： fontSize
    * 事件處理 onClick={{ }} ，要傳參數記得改成箭頭函式寫法
    * 樣式也可用 ES6 的擴展屬性設定
    * 要在裡頭寫 JS 需要在外面包 { }

-----------------------------

# 元件

打開google research每個搜尋的紀錄都是一個元件，
React在使用者建立模板後，以後直接呼叫元件，即可產生相同的模板
1. 好處：
    * 實現關注點分離
    * 減少重複撰寫
2. 元件的名字開頭要大寫
3. 用 rfce + enter 快速生成元件
4. 元件設計：
    * 寫法： class component / functional component
    * 狀態：無狀態 / 有狀態
    * 職責：展示型 / 容器型

-----------------------------


# State useState setState

1. 用 useState 裡帶的參數來初始化
2. 只能用 set 開頭的函式命名 setState ，被呼叫時會負責更改 State 值
3. State 被改變時，會觸發重新渲染
4. State 是單獨存在於元件裡的，在其他元件抓不到

const [num, setNum] = useState(0)

-----------------------------

# useState 背後原理與 setState 非同步問題

usestate會回傳一個陣列，陣列包含兩個東西，[state,set state]
當宣告一個陣列對應到use state時，就可將宣告的陣列賦予新的意義
不僅方便開發更能完成變數宣告。


1. useState 背後原理是解構語法
2. 使用 useState 更新內容時，會把整個物件換掉
   ->將資料單獨列出來，避免每次都要重新渲染後耗時
3. React 18 後的版本， setState 都是以非同步的方式更新

非同步會等所有的資料更新完再重新渲染，因此數值可能會不對稱
->解決方式:改用props()

-----------------------------

# Props 、 State 和 Props 比較

1. props 是用來單向傳遞父元件到子元件的資料
2. 寫法如 data={ parentData } ，前面是子元件要使用的名稱，後面是父元件要傳的 State 名稱
3. 子元件用 props 來取得資料
4. Props 本身無法更改，但可以在子元件呼叫父元件的 setState 來改變值，也可用同樣方法來從子元件傳參數給父元件
5. State 控制的是自己本身， 且可以被改變， Props 讓父元件來控制自己，唯獨、不可被改變

-----------------------------

重複渲染、條件渲染、預設值、 dangerouslySetInnerHTML

1. 重複渲染： map
2. 條件渲染： &&
3. 預設值： ||
4. dangerouslySetInnerHTML={{__html: State}}

-----------------------------

# Functional Component 、 Class Component

1. 以前就有這兩種寫法，只是 React 16.8 之後多了 Hook ，讓 Functional Component 能做的事變多了
2. Class Component 要注意：
    * State 統一放在 state 物件，取用要加上 this.state
    * 改值要使用 this.setState ，只會替換掉有改變的內容
    * 只要有調用 this.setState 就重新渲染
    * 用 props 傳改變 State 的函式需搭配 .bind(this) 
3. 相較之下， Functional Component 
    * 比較簡潔
    * 可避免不必要渲染
    * 可避免 this 問題






