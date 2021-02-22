import React from 'react';
import { withTranslation } from 'react-i18next';
import * as emailjs from 'emailjs-com';
import apiKeys from "../apikeys";
import '../App.css';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        let templateParams = {
            from_name: name,
            to_name: 'Oumaima',
            message: message,
            email: email
        }
        emailjs.send(
            apiKeys.SERVICE_ID,
            apiKeys.TEMPLATE_ID,
            templateParams,
            apiKeys.USER_ID
        )
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
  
    render() {
        const { t } = this.props;
        return(
            <div className="container">
                <h3>{t('Get In Touch')}</h3>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">{t('Name')}</label>
                        <input 
                            name="name"
                            type="text" 
                            className="form-control" 
                            value={this.state.name} 
                            onChange={this.handleChange.bind(this, 'name')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{t('Email adress')}</label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            value={this.state.email} 
                            onChange={this.handleChange.bind(this, 'email')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('Message')}</label>
                        <textarea 
                            name="message"
                            className="form-control" 
                            rows="5" 
                            value={this.state.message} 
                            onChange={this.handleChange.bind(this, 'message')} />
                    </div>
                    <button type="submit" className="btn btn-dark">{t('Submit')}</button>
                </form>
            </div>
        );
    }
}
  
export default withTranslation()(Contact);