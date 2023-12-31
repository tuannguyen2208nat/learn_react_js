import React from 'react';

class MyComponent1 extends React.Component {
    state = {
        name: 'Tuan',
        page: 'NAT'
    }

    handleOnChangeName = (event) => {
        this.setState({ name: event.target.value });
    } //Cú pháp thay đổi state

    render() {
        return (
            <input value={this.state.name} type="text"
                onChange={(event) => this.handleOnChangeName(event)}
            />
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

export { MyComponent1, MyComponent2 };