import React from 'react';
import { withTranslation } from 'react-i18next';
import '../App.css';
import '../styles/about.css'

class About extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="about">
                <h2 className="title">{t('About Me')}</h2>
                <hr />
                <div className="abt-content">
                    <img alt="illustration" src="dev.svg" />
                    <div className="text">
                        <p>{t('I am a 22-year-old Front End Developer based in')} <strong>{t('Kenitra, Morocco')}</strong>.</p><br/>
                        <p>{t('I have a passion for using technologies to produce creative solutions to problems. I like to resolve design problems and create smart user interfaces, developing rich web experiences & web applications.')}</p><br />
                        <p>{t('The main areas of my expertise are')} <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Angular</strong>, <strong>React</strong>, <strong>Node</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p><br />
                        <p>{t('I am always looking for new opportunities to further develop my skillset and expand my knowledge. I am currently available for hire.')}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(About);