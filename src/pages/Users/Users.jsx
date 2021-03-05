import React from 'react';

const Users = (props) => {

    if ( props.users.users.length === 0 ){
        props.setUsers([
            {id: 1, name: "Vadim", login: "", password: "" },
            {id: 2, name: "Vad", login: "", password: "" },
            {id: 3, name: "Barabashka", login: "", password: "" },
            {id: 4, name: "Anton", login: "", password: "" },
        ])
    }

    return (
        <div className="row pt-4 pb-4">
            {
                props.users.users.map( (u) => <div key={u.id} className="col-lg-4 mb-2 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                    <h2>{ u.name }</h2>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                )
            }
        </div>
    )
}

export default Users