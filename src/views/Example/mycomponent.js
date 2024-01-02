import React from 'react';
import { ChildComponent3, ChildComponent4, ChildComponent5, ChildComponent6, ChildComponent7, ChildComponent8 } from './childcomponent';
import AddComponents from './AddComponent';

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
                <ChildComponent3 />
            </>
        );
    }
}

class MyComponent4 extends React.Component {

    render() {
        return (
            <>
                <ChildComponent4 />
            </>
        );
    }
}

class MyComponent5 extends React.Component {
    state = {
        name: '',
        age: '',
        address: '',
        arrJob: [
            { id: 'abc001', title: 'Dev' },
            { id: 'abc002', title: 'Tester' },
            { id: 'abc003', title: 'Tester' }
        ]
    }
    handleChangeName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleChangeAge = (event) => {
        this.setState({ age: event.target.value })
    }
    handleChangeAddress = (event) => {
        this.setState({ address: event.target.value })
    }

    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Name:</label><br />
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleChangeName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Age</label><br />
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleChangeAge(event)}
                    />
                    <br />
                    <label htmlFor="lname">Address</label><br />
                    <input type="text"
                        value={this.state.address}
                        onChange={(event) => this.handleChangeAddress(event)}
                    />
                </form>
                <ChildComponent5
                    name={this.state.name}
                    age={this.state.age}
                    address={this.state.address}
                    arrJob={this.state.arrJob}
                />
            </>
        );
    }
}

const MyComponent6 = () => {
    return (
        <>
            <ChildComponent6 />
        </>
    );

}

const MyComponent7 = () => {

    return (
        <>
            <ChildComponent7 />
        </>
    );

}

class MyComponent8 extends React.Component {
    state = {
        arrJob: [
            { title: '', salary: '' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }
    render() {
        return (
            <>
                <AddComponents
                    addNewJob={this.addNewJob}
                />
                <ChildComponent8
                    arrJob={this.state.arrJob}
                />
            </>
        );
    }
}

export { MyComponent1, MyComponent2, MyComponent3, MyComponent4, MyComponent5, MyComponent6, MyComponent7, MyComponent8 }; 