import React from "react";
import { toast } from 'react-toastify';

class Inputdata extends React.Component {

    state = {
        work: ''
    }
    handleChangework = (event) => {
        this.setState({ work: event.target.value })
    }

    handleSubmit = (event) => {

        if (!this.state.work) {
            toast.error(`Please enter data`)
            return null;

        }
        else {
            this.props.addTodo({
                work: this.state.work
            })
            this.setState({
                work: ''
            })
            toast.success(`Succes`)
        }
    }

    render() {
        return (
            <>
                <div className="first">
                    Enter data :
                </div>

                <div className="second">
                    <input type="text"
                        value={this.state.work}
                        onChange={(event) => this.handleChangework(event)}
                    />
                    <input type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </div>
            </>
        );
    }
}

export default Inputdata;