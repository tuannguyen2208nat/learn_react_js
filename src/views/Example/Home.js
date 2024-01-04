import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('todo')
        }, 3000);
    }


    render() {
        console.log('>>>check props : ', this.props)
        return (
            <><div>
                Hello world , This page of Lil Nat
            </div></>
        );
    }
}
export default withRouter(Home);
