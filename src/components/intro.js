import React from 'react';
import { withTranslation } from 'react-i18next';
import '../styles/intro.css';

class Intro extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="intro">
                <h1 className="greeting">{t('Hello, I am')}<br/><span>Oumaima Tiguint</span></h1>
                <h2 className="role">{t('UI Designer & Frontend Developer')}</h2>
                <a className="cv" href="/Oumaima-Tiguint_CV.pdf" download>{t('Download CV')}</a>
            </div>
        )
    }
}

export default withTranslation()(Intro);