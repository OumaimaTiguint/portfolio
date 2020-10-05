import React from 'react';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faAt } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './intro.css';

class Intro extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="intro">
                <h1 className="greeting">{t('Hello, I am')}</h1>
                <h1 className="name">Oumaima <br/> Tiguint</h1>
                <p className="role">{t('Front end developer')}</p>
                <div className="intro-grid">
                    <a className="btn" href="/Oumaima-Tiguint-CV.pdf" download>
                        <FontAwesomeIcon icon={faArrowDown} />
                        {t('Download CV')}
                    </a>
                    <div className="socials">
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/OumaimaTiguint">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/oumaima-tiguint-8608b7185/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="mailto:webmaster@example.com">
                            <FontAwesomeIcon icon={faAt} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/OTiguint">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Intro);