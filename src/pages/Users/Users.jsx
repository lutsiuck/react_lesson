import axios from 'axios';
import React from 'react';

class Users extends React.Component {

    componentDidMount(){
        if (this.props.users.users.length === 0){
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then( (response) => this.props.setUsers(response.data));
        }
    }

    render(){
        return (
            <div className="row pt-4 pb-4">
                {
                    this.props.users.users.map( (u) => <div key={u.id} className="col-lg-4 mb-2 text-center">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
    
                        <h2>{ u.name }</h2>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Users