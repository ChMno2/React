//生命週期函數是指 在某一個時刻組件會自動調用執行的函數
//ex:render(),constructor()

import React, { Component ,Fragment} from "react";
import TodoItem from './TodoItem';
import './style.css'

class Todolist extends Component{

    constructor(props)
    {
        super(props);
        //當組件的state或者props發生改變的時候，render函數就會重新執行
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    //在組件即將被掛載到頁面的時刻自動執行
    componentWillMount(){
        console.log('componentWillMount');
    }

    render()
    {
        return(
            <Fragment>
                <div>
                    {/*下面是一個input框*/}
                    {
                        //下面是一個input
                        //htmlFor擴大點擊功能
                    }
                    <label htmlFor="insertArea">輸入內容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}//事件綁定
                        ref={(input)=>{this.input = input}}
                    />
                    <button 
                        onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul  ref ={(ul) => {this.ul = ul}}>
                {
                    this.getTodoItem()
                }
                
                </ul>
            </Fragment>
        );

    }

    //組件被掛在到頁面之後，自動被執行
    componentDidMount()
    {
        console.log('componentDidMount');
    }

    //組件被更新之前，它會自動被執行
    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate');
        return true;
    }

    //組件被更新之前，它會自動執行，但是他在shouldComponent之後被執行
    //如果shouldComponentUpdate返回true他才會被執行
    //如果返回false,這個函數就不會被執行
    componentWillUpdate()
    {
        console.log('componentWillUpdate');
    }

    //組件更新完成之後，他會被執行
    componentDidUpdate()
    {
        console.log('componentDidUpdate');
    }
    //當一個組件從父組件接收參數
    //只要父組件的render函數被重新執行了，子組件的生命週期函數就會被執行
    //如果這個組件第一次存在於父祖件中，他不會被執行
    //如果這個組件之前已經存在於父祖件中他才會被執行
    componentWillReceiveProps()
    {
        console.log('componentWillReceiveProps');
    }

    //當這個組件即將被從頁面中剔除的時候會被執行
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
    }

     getTodoItem(){
        return this.state.list.map((item,index)=>{
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            );
        })
    }
    //響應式設計思想
    handleInputChange(e)
    {
        const value = this.input.value;
        this.setState(()=>({
            inputValue:value
        }));//黃色括號代表return的簡寫
        
    } 
    //刷新list資料
    handleBtnClick()
    { 
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length);
        });
       
         
    }
    //傳遞index
    handleItemDelete(index){
        //immutable
        //state不允許做任何改變

        this.setState((prevState)=>{
            const list =[...prevState.list]
            list.splice(index,1);
            return{list}
        });
        //console.log(index);
    }


}
export default Todolist
