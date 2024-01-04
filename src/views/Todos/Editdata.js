import React from "react";
import './Editdata.scss'
class Editdata extends React.Component {


    handleClickEdit = (work) => {
        this.props.handleeditTodo(work)
    }

    handleClickDelete = (work) => {
        this.props.deleteTodo(work)
    }

    handleOnchaneEditTodo = (event) => {
        let { edittodo } = this.props
        let edittodoCopy = edittodo
        edittodoCopy.work = event.target.value
        this.props.handleeditTodo({ edittodoCopy })
    }

    render() {
        let { todolist, edittodo } = this.props;
        let isEmptyObj = Object.keys(edittodo).length === 0;
        console.log('>>>Check empty object: ', isEmptyObj)
        return (
            <>
                <div className>
                    {
                        todolist.map((item, index) => {
                            if (index === 0) {
                                return null;
                            }
                            else {
                                return (
                                    <div className="ShowTodo" key={item.work}>
                                        {
                                            isEmptyObj === true ?
                                                <span>{index} - {item.work}</span>
                                                :
                                                <>
                                                    {edittodo.work === item.work ?
                                                        <span>
                                                            {index} - <input
                                                                value={edittodo.work}
                                                                onChange={(event) => this.handleOnchaneEditTodo(event)}
                                                            />
                                                        </span>
                                                        :
                                                        <span>{index} - {item.work}</span>

                                                    }
                                                </>
                                        }

                                        <button onClick={() => this.handleClickEdit(item)}>
                                            Edit
                                        </button>{"  "}
                                        <button onClick={() => this.handleClickDelete(item)}>
                                            Delete
                                        </button>
                                    </div>
                                );
                            }

                        })
                    }

                </div>
            </>
        );

    }
}

export default Editdata;
