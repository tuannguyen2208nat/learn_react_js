import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/anh.jpg'
class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('todo');
    //     }, 3000);
    // }

    render() {
        console.log('>>>check props : ', this.props);
        return (
            <>
                <div>
                    Hello world, This page of Lil Nat
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
            </>
        );
    }
}

export default withRouter(Color(Home));
