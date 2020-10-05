import React from 'react';
import { withTranslation } from 'react-i18next';
import './about.css';

class About extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="about">
                <h2 className="title">{t('About Me')}</h2>
                <h4>Oumaima Tiguint</h4>
                <p className="text">{t('I am a Front End Developer based in Kenitra, Morocco. I have a passion for using technologies to produce creative solutions to problems. I am always looking for new opportunities to further develop my skill set and expand my knowledge.')} </p>
            </div>
        )
    }
}

export default withTranslation()(About);