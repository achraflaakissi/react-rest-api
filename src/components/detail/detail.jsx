import React from 'react';
import Element from '../element/element';
import Axios from "axios";

class DetailPage extends React.Component{
    constructor(){
        super();
        this.state= {
            user:[]
        }
    }
    componentDidMount() {
        Axios.get("http://localhost:8080/api/"+this.props.match.params.id).then(res => {
          console.log(res);
          this.setState({ user: res['data'].data })
        })
      }
    render(){
        const {user} = this.state;
        return(
            <div>
            <h1></h1>
                <Element showBtn={false} key={user._id} {...user} />
            </div>
        )
    }
}

export default DetailPage;
