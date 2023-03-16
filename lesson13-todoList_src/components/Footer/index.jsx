import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.css"

export default class Footer extends Component {
    // 全选checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    // 清楚所有已完成todo的回调
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
    }
    render() {
        const { todos } = this.props
        // 计算已完成的个数
        const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        // 总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label >
                    <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / <span>全部{total}</span>
                </span>
                <button className='btn btn-danger' onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
