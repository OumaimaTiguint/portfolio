import React from 'react';
import { withTranslation } from 'react-i18next';
import * as emailjs from 'emailjs-com';
import apiKeys from "../apikeys";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import '../styles/contact.css';

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
            <div className="contact">
                <h1 className="contact-title">{t("Let's Collaborate")}!</h1>
                <p className="contactp">{t('I am always looking to work on interesting and innovative projects.')}</p>
                <div className="socials">
                    <a rel="noopener noreferrer" target='_blank' href="https://github.com/OumaimaTiguint">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/oumaima-tiguint-8608b7185/">
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="mailto:oumaimatiguint@gmail.com">
                        <FontAwesomeIcon className="icon" icon={faAt} />
                    </a>
                </div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input 
                            name="name"
                            type="text" 
                            className="form-control" 
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={this.handleChange.bind(this, 'name')} />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email address"
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            value={this.state.email} 
                            onChange={this.handleChange.bind(this, 'email')} />
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="message"
                            placeholder="Message"
                            className="form-control" 
                            rows="5" 
                            value={this.state.message} 
                            onChange={this.handleChange.bind(this, 'message')} />
                    </div>
                    <button type="submit" className="btn">{t('Submit')}</button>
                </form>
            </div>
        );
    }
}
  
export default withTranslation()(Contact);