import React from 'react';
import { withTranslation } from 'react-i18next';
import './footer.css';

class Footer extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="footer">
                © {t('Developed by')} Oumaima Tiguint, 2020 
            </div>
        )
    }
}

export default withTranslation()(Footer);