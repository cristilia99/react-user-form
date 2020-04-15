import React from 'react';
import "./UserItem.css";

class UserItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        };
    }

    render(){
        const {id, name, male, female, email, salariu, isGoldClient, handleDeleteUsers} = this.props;
        
        return (
        
            <div className="user" style={{ backgroundColor: isGoldClient ? 'gold' : 'white'}}>
    
                <h3>{name}</h3>
                { male ? <img src="https://icon-library.net//images/boy-icon-png/boy-icon-png-22.jpg" width="120px" alt="logo"/> : female ? <img src="https://icon-library.net//images/girl-icon-png/girl-icon-png-23.jpg" width="120px" alt="logo"/> :  <img src="https://icon-library.net//images/icon-profile/icon-profile-11.jpg" width="120px" alt="unknown"/>}
                
                <p>{ email }</p>
                <p>Salariu : { salariu }</p>
             
                <button onClick={(event) => handleDeleteUsers(event, id)}>Sterge Utilizatorul</button>
             
            </div>          
        );
    }
}

export default UserItem;