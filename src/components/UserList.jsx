import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        const {users} = this.props;

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
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
                />
            })}
        </div>
    );
}
}

export default UserList;