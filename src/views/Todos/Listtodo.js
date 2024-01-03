import React from "react";
import Inputdata from "./Inputdata";
import Editdata from "./Editdata";

class Listodo extends React.Component {

    state = {
        todolist: [
            { work: '' }
        ],
        edittodo: {}
    }

    addTodo = (val) => {
        this.setState({
            todolist: [...this.state.todolist, val]
        })
    }

    deleteTodo = (val) => {
        let currentwork = this.state.todolist;
        currentwork = currentwork.filter(item => item.work !== val.work)
        this.setState({
            todolist: currentwork
        })
    }

    handleeditTodo = (val) => {
        this.setState({
            edittodo: val
        })
    }

    render() {
        return (
            <>
                <Inputdata
                    addTodo={this.addTodo}
                />

                <Editdata
                    todolist={this.state.todolist}
                    deleteTodo={this.deleteTodo}
                    handleeditTodo={this.handleeditTodo}
                    edittodo={this.state.edittodo}
                />
            </>
        );
    }
}

export default Listodo;