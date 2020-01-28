import React from 'react';
import {
  Link
} from "react-router-dom";

const Element = (props) =>(
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <img src="https://picsum.photos/200/300.jpg"/>
      <div className="card-body">
        <p className="card-text">
            {props.fullname}
        </p>
        <div className="d-flex justify-content-between align-items-center">
        {props.showBtn ? <div className="btn-group">
           <Link to={{pathname: `detail/${props._id}`}} > <button type="button" className="btn btn-sm btn-outline-secondary">View</button></Link>
           <button type="button" onClick={()=>{ props.onDelete(props._id)}} className="btn btn-sm btn-danger">delete</button>
            </div> : null}
          
          <small className="text-muted">{props.age} years</small>
        </div>
      </div>
    </div>
  </div>
)

export default Element;