import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            male: false,
            female: false,
            email: '',
            parola1: '',
            parola2: '',
            salariu: '',
            isGoldClient: false
        };
 
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    handleParola1Change(event) {
        this.setState({parola1: event.target.value})
    }

    handleParola2Change(event) {
        this.setState({parola2: event.target.value})
    }

    updateIsMale(event) {
        this.setState({male : event.target.checked , female : false});
    }

    updateIsFemale(event) {
        this.setState({female : event.target.checked , male : false });
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSalariu(event) {
        this.setState({salariu: event.target.value});
        
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    
    handleFormSubmit(event, name, male, female, email, parola1, parola2, salariu, isGoldClient) {
        event.preventDefault();

        this.props.submitAddForm(event, name, male, female, email, salariu, isGoldClient);
    }
    }
    render() {
        const {name, male, female, email, parola1, parola2, salariu, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.handleFormSubmit(event, name, male, female, email, parola1, parola2, salariu, isGoldClient)}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                    <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        checked={this.state.male}
                        onChange={(event) => this.updateIsMale(event)}
                    />
                    <label htmlFor="male">Barbat</label>
               
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender"  
                        checked={this.state.female}
                        onChange={(event) => this.updateIsFemale(event)}
                    />
                    <label htmlFor="female">Femeie</label>                   
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                    <label htmlFor="parola1">Parola 1:</label>
                    <input 
                        id = "parola1"
                        type="password" 
                        name="parola1" 
                        value={this.state.parola1}
                        onChange={(event) => {this.handleParola1Change(event)}}
                    />
                    <label htmlFor="parola2">Parola 2:</label>
                    <input 
                        id = "parola2"
                        type="password" 
                        name="parola2" 
                        value={this.state.parola2}
                        onChange={(event) => {this.handleParola2Change(event)}}
                    />
                    <label htmlFor="salariu">Salariu:</label>
                    <input
                        id="salariu"
                        type="number"
                        name="salariu"
                        value={this.state.salariu}
                        onChange={(event) => this.updateSalariu(event)}
                    />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                    <input className="buton" type="submit" value="Introdu utilizatorul"/>

                <input type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;