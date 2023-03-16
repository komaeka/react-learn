// 创建“外壳”组件App
import React, { Component } from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"

// 创建并暴露App组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "诳街", done: true },
    ]
  }
  // 用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  // 用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  // 删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }
    })
    this.setState({ todos: newTodos })
  }

  // 清除所有已完成的
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
      </div>
    )
  }
}
