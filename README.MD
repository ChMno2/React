redux是一個數據層的框架，Store存放所有的數據的公共區域，Action Creation
舉圖書館流程為例:
React Components指的是借書者，Action Creation借什麼書這句話，
Store是一個圖書館管理員，Reducer:檔案總管
React Components跟Store說我要更改數據，通過Action Creator和Store說，
不過 Store不知道要如何更改數據，最後要依靠Reducer來告訴Store數據該如何被修改，
最後由Store告知React Components已經修改完數據了，要重新獲取資訊。
![image]("C:\Users\ASUS\Downloads\螢幕擷取畫面 2024-07-20 195141.png)
"
