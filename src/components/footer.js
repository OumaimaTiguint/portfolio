import React from 'react';
import { withTranslation } from 'react-i18next';
import '../App.css';

class Footer extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="footer">
                © {t('Developed by')} Oumaima Tiguint, 2021 
            </div>
        )
    }
}

export default withTranslation()(Footer);