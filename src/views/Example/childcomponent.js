import React from 'react';

class ChildComponent1 extends React.Component {

    state = {
        name: '',
        age: ''
    }

    handleOnChangeName = (event) => {
        this.setState({ name: event.target.value });
    } //Cú pháp thay đổi state

    handleOnchaneAge = (event) => {
        this.setState({ age: event.target.value });
    }

    render() {
        return (
            <>
                <div className='first'>
                    Nhập tên của bạn
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div className='second'>
                    Nhập tuổi của bạn
                    <input value={this.state.age} type="text"
                        onChange={(event) => this.handleOnchaneAge(event)}
                    />
                </div>
                <div className='thirst'>
                    <div>
                        My name is : {this.state.name}
                        <br />
                        I'm {this.state.age} years old
                    </div>
                </div>
            </>
        );
    }
}

class ChildComponent2 extends React.Component {

    state = {
        name: 'Tuan',
        page: 'NAT'
    }

    handleClickButton = () => {
        alert('Click');
    }

    render() {
        return (
            <>
                <div className='first'>
                    Hello , my component of {this.state.name}
                </div>
                <div className='second'>
                    My page is : {this.state.page}
                </div>
                <div className='thirst'>
                    <button onClick={() => this.handleClickButton()}>click me</button>
                </div>
            </>
        );
    }
}

class ChildComponent3 extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }
    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }
    handleSummit = (event) => {
        event.preventDefault();
        console.log('>>> check input data : ', this.state)
        alert('Hello ' + this.state.firstName + ' ' + this.state.lastName)
    }

    render() {
        return (
            <>
                <div className='first'>
                    Hello world
                </div>
                <div className='second'>
                    <br />
                    <form action="/action_page.php">
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text"
                            value={this.state.firstName}
                            onChange={(event) => this.handleChangeFirstName(event)}
                        />
                        <br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text"
                            value={this.state.lastName}
                            onChange={(event) => this.handleChangeLastName(event)}
                        />
                        <br />
                        <input type="submit"
                            value="Submit"
                            onClick={(event) => this.handleSummit(event)}
                        />
                    </form>
                </div>

            </>
        );
    }
}

class ChildComponent4 extends React.Component {

    state = {
        name1: '',
        name2: ''
    }

    handleChangeName1 = (event) => {
        this.setState({ name1: event.target.value })
    }
    handleChangeName2 = (event) => {
        this.setState({ name2: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.name1 + ' yêu ' + this.state.name2)
    }

    render() {
        return (
            <>
                <div className='first'>
                    Nhập tên bạn:
                    <input type="text"
                        value={this.state.name1}
                        onChange={(event) => this.handleChangeName1(event)}
                    />
                </div>
                <div className='second'>
                    Nhập tên người ấy
                    <input type="text"
                        value={this.state.name2}
                        onChange={(event) => this.handleChangeName2(event)}
                    />
                </div>
                <div className='thirst'>
                    <button onClick={(event) => this.handleSubmit(event)}>  Submit</button>
                </div>
            </>
        );
    }
}

class ChildComponent5 extends React.Component {
    render() {
        console.log('check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address, arrJob } = this.props;
        return (
            <>
                <div className='first'>
                    Child component name : {name} - {age} - {address}
                </div>

                <div className='arrJob'>
                    {
                        arrJob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.id} - {item.title}
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}

export { ChildComponent1, ChildComponent2, ChildComponent3, ChildComponent4, ChildComponent5 };