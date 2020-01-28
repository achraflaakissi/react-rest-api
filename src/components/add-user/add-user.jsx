import React from 'react';

const AddUser = ()=>(
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">FullName</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Age</label>
                <input type="number" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

export default AddUser;