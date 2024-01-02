import React from "react";

class AddComponents extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value })
    }
    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('>>> check data : ', this.state)
        if (!this.state.title || !this.state.salary) {
            alert('Please input data')
            return;
        }
        this.props.addNewJob({
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <div className='second'>
                    <br />
                    <form action="/action_page.php">
                        <label htmlFor="fname">Title Job</label><br />
                        <input type="text"
                            value={this.state.title}
                            onChange={(event) => this.handleChangeTitle(event)}
                        />
                        <br />
                        <label htmlFor="lname">Salary</label><br />
                        <input type="text"
                            value={this.state.salary}
                            onChange={(event) => this.handleChangeSalary(event)}
                        />
                        <br />
                        <input type="submit"
                            value="Submit"
                            onClick={(event) => this.handleSubmit(event)}
                        />
                    </form>
                </div>

            </>
        );
    }
}
export default AddComponents;

