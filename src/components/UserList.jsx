import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        const {users} = this.props;
        const {handleDeleteUsers} = this.props;

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
                <div className="users">
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                            male={ user.male }
                            female={ user.female }
                    email={ user.email }
                            salariu={ user.salariu}
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                            handleDeleteUsers = {handleDeleteUsers}
                />
            })}
        </div>
            </div>
    );
}
}

export default UserList;