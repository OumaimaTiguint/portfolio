import React from 'react';
import { withTranslation } from 'react-i18next';
import '../App.css';

class About extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="about container">
                <h2 className="title">{t('About Me')}</h2>
                <h4>Oumaima Tiguint</h4>
                <div className="abt-content">
                    <a target="_blank" rel="noopener noreferrer" href='https://pngtree.com/so/doctor-clipart'>
                        <img alt="illustration" src="illustration.png"></img>
                    </a>
                    <p className="text">{t('I am a 22 year old Front End Developer based in Kenitra, Morocco. I have a passion for using technologies to produce creative solutions to problems. I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications. The main areas of my expertise are HTML, CSS, JavaScript, TypeScript, Angular, React, Node, and Express. I am always looking for new opportunities to further develop my skill set and expand my knowledge. I am currently available for hire.' )}</p>
                </div>
            </div>
        )
    }
}

export default withTranslation()(About);