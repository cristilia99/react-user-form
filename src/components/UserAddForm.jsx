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

        let required_fields = {
            name : true,
            male: false,
            female: false,
            email: true,
            parola1: true,
            parola2: true,
            salariu: true,
            isGoldClient: false
        };

        let form_items = document.getElementsByClassName('form-item');

        let is_valid_form = true;

        for (let i = 0; i < form_items.length; i++) {

            let c_element = form_items[i];
        
            let c_error_element = c_element.getElementsByClassName('error-msg')[0];
    
            for (let j in c_element.children) {
    
                let c_child = c_element.children[j];
                
                if ((c_child.tagName === 'INPUT') && required_fields[c_child.id] ) {
                    
                    if (c_child.value.length <1 ) {
    
                        is_valid_form= false;
                        c_error_element.style.display = 'block';
                        
                    } else {
                        c_error_element.style.display = 'none';                        
                    }
    
                    break;    
                }            
            }
        }

        if ( is_valid_form) {            
    
            let password1_val = document.getElementById('parola1').value;
            let password2_val = document.getElementById('parola2').value;
    
            if( password1_val !== password2_val) {
    
                is_valid_form = false;
                alert('Parolele nu coincid!');
    
            }

            let email_val= document.getElementById('email').value;

            if (is_valid_form && !(this.validare_email(email_val))) {
    
                is_valid_form = false;
                alert('Adresa de email nu are un format valid');
            }
        }
            
        if (is_valid_form) {

        let checkbox = document.getElementById('isGoldClient');
        console.log(checkbox);
        let male = document.getElementById('male').checked;
        console.log(male);
        let female = document.getElementById('female').checked;
        console.log(female);
        if(checkbox.checked === true) this.setState({isGoldClient: checkbox})
        else this.setState({isGoldClient: checkbox});
        
        if(male === true && female === false) this.setState({ male: male, female: female})
        else this.setState({male: male, female: female});

        this.props.submitAddForm(event, name, male, female, email, salariu, isGoldClient);
        if(checkbox.checked === true) checkbox.checked= false;
        this.setState({name: '', male: false, female: false, email: '', parola1: '', parola2: '', salariu: '', isGoldClient: checkbox.checked})
        
        }
    }

    validare_email(email_str) {

        let email_arr = email_str.split('@');
    
        let cond1 = (email_arr.length !== 2);
    
        let cond2 = (email_arr[0].length === 0);
    
        let cond3 = (email_arr[1] === undefined || email_arr[1].length === 0 || email_arr[1].split('.').length === 1 || email_arr[1].split('.').length > 4);
    
        if ( cond1 || cond2 || cond3) {
            return false;
        }
        return true;
    }

    render() {

        const {name, male, female, email, parola1, parola2, salariu, isGoldClient} = this.state;
       
        return (
            <form
                className="user-add-form"
                autoComplete="off"
                onSubmit={(event) => this.handleFormSubmit(event, name, male, female, email, parola1, parola2, salariu, isGoldClient)}
            >
                <fieldset>
                    
                <legend><h2>Formular de utilizatori</h2></legend>

                <div className="form-item">
                    <label htmlFor="name">Nume:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(event) => this.updateName(event)}
                    />
                    <div className="error-msg">Campul trebuie completat!</div>
                </div>
            
                <div className="radiobox">                   
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
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(event) => this.updateEmail(event)}
                    />
                    <div className="error-msg">Campul trebuie completat!</div>
                </div>

                
                <div className="form-item">
                    <label htmlFor="parola1">Parola 1:</label>
                    <input 
                        id = "parola1"
                        type="password" 
                        name="parola1" 
                        value={this.state.parola1}
                        onChange={(event) => {this.handleParola1Change(event)}}
                    />
                    <div className="error-msg">Campul trebuie completat!</div>
                </div>

                <div className="form-item">
                    <label htmlFor="parola2">Parola 2:</label>
                    <input 
                        id = "parola2"
                        type="password" 
                        name="parola2" 
                        value={this.state.parola2}
                        onChange={(event) => {this.handleParola2Change(event)}}
                    />
                    <div className="error-msg">Campul trebuie completat!</div>
                </div>

                <div className="form-item">
                    <label htmlFor="salariu">Salariu:</label>
                    <input
                        id="salariu"
                        type="number"
                        name="salariu"
                        value={this.state.salariu}
                        onChange={(event) => this.updateSalariu(event)}
                    />
                    <div className="error-msg">Campul trebuie completat!</div>
                </div>

                <div className="form-item">
                    <label htmlFor="is-gold-client">Client GOLD</label>
                    <input
                        id="isGoldClient"
                        type="checkbox"
                        name="is-gold-client"
                        checked={this.state.IsGoldClient}
                        onChange={(event) => this.updateIsGoldClient(event)}
                    />
                    <div className="error-msg">Campul trebuie completat!</div>
                </div>

                <div className="form-item">
                    <input className="buton" type="submit" value="Introdu utilizatorul"/>
                </div>

                </fieldset>
            </form>
        )
    }
}

export default UserAddForm;