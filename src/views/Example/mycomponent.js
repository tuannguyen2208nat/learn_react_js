import React from 'react';

class MyComponent1 extends React.Component {
    render() {
        return (
            <div> Hello my component</div>
        );
    }
}

class MyComponent2 extends React.Component {

    state = {
        name: 'Tuan',
        page: 'NAT'
    }

    handleClickButton = () => {
        alert('Click me');
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