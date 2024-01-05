import React from "react";
// import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/anh.jpg'
import { connect } from 'react-redux'

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('todo');
    //     }, 3000);
    // }

    render() {
        console.log('>>>check props : ', this.props.dataRudx);
        return (
            <>
                <div>
                    Hello world, This page of Lil Nat
                </div>
                <div>
                    <img src={logo} alt="Lil Nat Logo" style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
            </>
        );
    }
}
// export default withRouter()(Color(Home));
const mapStateToProps = (state) => {

    return {
        dataRudx: state.user
    }
}

export default connect(mapStateToProps)(Color(Home));
