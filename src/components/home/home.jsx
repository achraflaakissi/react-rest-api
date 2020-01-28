import React from "react";
import Element from '../element/element';
import AddUser from '../add-user/add-user';
import Axios from "axios";

const newUser={
    fullname:"",
    age:0
}
class HomePage  extends React.Component {
    constructor() {
        super();
        this.state = {
          collections: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount() {
        this.getListUsers();
      }
      getListUsers = ()=>{
        Axios.get("http://localhost:8080/api/").then(res => {
            console.log(res);
            this.setState({ collections: res['data'].data })
          })
      }
      hundelDelete=(id)=>{
        Axios.delete(
            'http://localhost:8080/api/'+id,
            { headers: { 'Content-Type': 'application/json' } }
          ).then(res=>{
            this.getListUsers();
          });
      }
      handleChange(event) {
            newUser[event.target.name]=event.target.value;
      }
    
      handleSubmit(event) {
        Axios.post(
            'http://localhost:8080/api/',
            { ...newUser },
            { headers: { 'Content-Type': 'application/json' } }
          ).then(res=>{
            this.getListUsers();
          });
          event.preventDefault();
      }    
        render(){
        const { collections } = this.state;
        return (
            <main role="main">
                <div className="album py-5 bg-light">
                    <div className="container">
                        <br/>
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            Nom :
                            <input type="text" name="fullname" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <label>
                            age :
                            <input type="text" name="age" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Envoyer" />
                        </form>
                        <br/>
                        <br/>
                    <div className="row">
                    {collections.map(({ _id, ...otherCollectionProps }) => (
                    <Element onDelete={this.hundelDelete} showBtn={true} key={_id} _id={_id} {...otherCollectionProps} />
                    ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default HomePage;
