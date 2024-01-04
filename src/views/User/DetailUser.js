import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log('>>>check res user : ', res)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        // let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div> Detail User with id {this.props.match.params.id}</div>
                <div> User'name: {user.first_name} - {user.last_name}</div>
                <div> User'mail: {user.email}</div>
                <div> <img src={user.avatar} /> </div>
                <div>
                    <button type="button" onClick={() => this.handleBackButton()}>BACK</button>
                </div>
            </>
        );
    }
}
export default withRouter(DetailUser)