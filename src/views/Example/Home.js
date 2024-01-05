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
    handleDeleteUser = (user) => {
        console.log('user', user)
        this.props.deleteUserRedux(user);
    }

    handleAddUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log('>>>check props : ', this.props.dataRudx);
        let listUser = this.props.dataRudx;
        return (
            <>
                <div>
                    Hello world, This page of Lil Nat
                </div>
                <div>
                    <img src={logo} alt="Lil Nat Logo" style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        {index + 1} - {item.name}
                                        &nbsp; <span onClick={() => this.handleDeleteUser(item)}>X</span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <button onClick={() => this.handleAddUser()}>Add New</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
