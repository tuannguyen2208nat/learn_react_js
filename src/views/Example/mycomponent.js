import React from 'react';

class MyComponent1 extends React.Component {

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

class MyComponent2 extends React.Component {

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

class MyComponent3 extends React.Component {
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

export { MyComponent1, MyComponent2, MyComponent3 };