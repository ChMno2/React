# 前端三大框架:
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

# 重複渲染、條件渲染、預設值、 dangerouslySetInnerHTML

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

-----------------------------

# Lifecycle 和 Class Component

1. 元件像人一樣有生有死，而生命週期幫助我們能在「特定階段」，做「只有該階段會做的事情」
2. constructor ：初始化與建構物件
3. render ：渲染
4. componentDidMount：只有第一次渲染會執行
5. componentDidUpdate ：每次重新渲染都會執行
6. componentWillUnmount ：元件卸載前要做的事情

-----------------------------

# Lifecycle 和 useEffect

1. useEffect 含有兩個參數，第一個放要執行的箭頭函式，第二個放要監聽的值，會放在陣列當中
2. 對應到 componentDidMount：第二個參數放空陣列
3. 對應到 componentDidUpdate ：第二個參數監聽要監聽的值
4. 對應到 componentWillUnmount ：第二個參數放空陣列，第一個參數要把要執行的事情放在 return 中


-----------------------------

# Hook 

1. Hook 是 React 先寫好的東西，方便我們不用從頭造輪子、可以直接開發，之前提過的 useState useEffect 都是 Hook
2. 注意：
    * 用 use 開頭
    * 除了自製的 Hook ，其他都只能在 React Function 中呼叫
    * 不要在迴圈、條件式、巢狀函式中呼叫
3. 優點：
    * 同個邏輯放在一起，易理解，增加元件重用性
    * no more this
    * 重用 stateful 邏輯

-----------------------------

# 建立 JSON Server 用 useEffect 模擬抓取、送出與刪除資料

son-server 這個套件的指令為： npx json-server --watch data/db.json --port 8000


-----------------------------

# 客製化 Hook

1. 重用 stateful 邏輯幫助我們能製作客製化 Hook 
2. 撰寫時記得思考，怎樣可以增加重用性？（例如使用通用性高的命名、把可能不一樣的東西抽出來等）
3. 可搭配 useEffect 做監聽

-----------------------------

# React Router 、 HashRouter 與 BrowserRouter

1.  使用 npm install react-router-dom@5 下載 React Router
2.  架構為：
       * BrowserRouter 是後端路由 / HashRouter 是前端路由
       * Switch ：會從上到下判斷 Switch 裡頭所有的 Route ，下一層一定要是 Route
       * Route ：印出第一個符合條件的 Route 包的元件，但條件只要一部分符合就算成符合，
          因此為避免判斷錯誤可加上 exact
       * 頁面元件
3.  把 a href 改為 Link to

-----------------------------

# useParams 與動態路徑參數、 useHistory 與重新導向和 404 頁面

1. useParams 這個 Hook 可幫助我們取得網址後面的 id ，藉此完成商品內頁
2. useHistory 這個 Hook 可幫助我們達到前往上一頁、下一頁、特定頁的功能
3. 在路由表最後一項設定 Route path="*" ，並包住 404 頁面元件。因為當前面的路由條件都不符合，至少一定會符合這項。也就是說，當客人輸的網址跟我們設定的都不同時，會印出 404 頁面元件

-----------------------------

# 引入 CSS ( inline-style)：使用與限制

1. 規則：
    * 外層包大括號＋大括號
    * 屬性有 dash 的改小駝峰寫法
    * 以數字或字串傳遞值
    * 搭配三元運算子判斷條件，再套用樣式
    * 樣式物件也能抽出單獨撰寫
    * 屬性有 dash 的改小駝峰寫法
    * 屬性有 dash 的改小駝峰寫法
2. 注意：
    * 能不渲染就不渲染
    * 無法實現 hover 、 media-query

-----------------------------

# 引入 CSS (外部引入)：使用與限制

1. 規則：
    * 用習慣的方式撰寫 CSS
    * 屬性不用改小駝峰寫法
    * 可以實現 hover 、 media-query
    * 在要用的元件 import ，並搭配 className 套用
    * 搭配三元運算子判斷條件，再套用樣式
2. 注意：
    * CSS 不會只對應到引入的元件
    * CSS 載入的順序依照被 import 的順序，不是元件使用的順序

-----------------------------

# 引入 CSS ( Styled Components )：使用與限制
1. 安裝： npm install --save styled-components
2. Emmet ：下載 vscode-styled-components 套件
3. 好處
    * 不會有覆蓋問題
    * 只載入相關樣式
    * 和 React 元件化的概念相符
2. 注意：
    * 樣式因為變成亂數，不好除錯，可加上 .attr({className: xxx})

-----------------------------

# 引入 CSS ( Styled Components )： props 、 extend 、共用元件

1. 用 props 設定會不斷用到的主題色等
2. 用 extend 來套用他人已寫好的樣式（例如 Bootstrap），再客製化

-----------------------------

# 引入 CSS ： 在 React 中如何使用Bootstrap？（上）

1. 介紹 Bootstrap
React Bootstrap 官網： https://react-bootstrap.github.io/get...
2. 安裝： npm install react-bootstrap bootstrap
3. 可使用 variant 套用 primary secondary 等樣式、 extend 來客製化
4. 介紹如何在全域清除預設瀏覽器樣式
5. 使用 theme={theme} 搭配 props 設定自己的主題色

-----------------------------

# 引入 CSS ： 在 React 中如何使用Bootstrap？（下 ）

1. 使用 map 大量生成 utils 樣式
2. theme 放在不同地方的差別

-----------------------------

# Ｍaterial UI：安裝、System 、 Box 、 Typography 、 Link 、 Button 、 Material Icons

1. 安裝： npm install @mui/material @emotion/react @emotion/styled
icon 安裝： npm install @mui/icons-material
官網： https://mui.com/material-ui/getting-s...
icon 搜尋： https://mui.com/material-ui/material-...
2.  學習一些基本的 Material UI  props

-----------------------------

# Ｍaterial UI： Theming ( Spacing 、 FontSize 、 Platte )

1. 在 Component API 可以查詢每個元件能使用的 props
2. 客製化 theme 的方法（Space / FontSize / Platte 顏色）

-----------------------------

# useMemo

1.  useMemo 可監聽值，當值改變才執行某些行為
2.  基本寫法介紹
3.  Functional Component 重渲染時會從頭跑一遍，生成新物件，因為 JS 的 Referential Equality 特性，導致每次物件都不會相等。使用 useEffect 的話會因判斷成不一樣的東西（其實一樣），多跑好幾次不需要的行為
4.  注意：
    *  useMemo 代表的是將東西用 cache 存起來
    *  因為 cache 並不是非常穩定，所以不該把它用在絕不能重跑程式的場合
5.  和 useEffect 的差異：
    *  觸發時間： useEffect 只會在第一次渲染後被呼叫， useMemo 則會在渲染中、元件 return state 前就觸發
    *  使用場合： 如果是要跟 State 值有關的、或是操控 DOM，應使用 useEffect ； 如果是優化速度，則應使用 useMemo

-----------------------------

# useRef 
1. 特性：
    *  會回傳一個含有 current 的物件
    *  可以操作 DOM
    *  值被更新時，不會觸發元件重新渲染
2.  能用來：
    *  操作 DOM
    *  阻止無限迴圈
    *  取得過去的值






