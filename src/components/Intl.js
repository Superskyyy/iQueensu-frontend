import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import {en_US, zh_CH} from "../assets/exportLanguages";

addLocaleData([...zh,...en]);

class Inter extends Component {
    render() {
        let { locale, localeMessage, children } = this.props;
        return (
            <IntlProvider key={locale} locale={locale} messages={localeMessage}>
                {children}
            </IntlProvider>
        )
    }
}

function chooseLocale(val) {
    let _val = val || navigator.language.split('_')[0];
    switch (_val) {
        case 'en':
            return en_US;
        case 'zh':
            return zh_CH;
        default:
            return en_US;
    }
}

const mapStateToProps = (state, ...ownProps) => ({
    locale: state.root.language,
    localeMessage: chooseLocale(state.root.language)
});

let Intl = connect(mapStateToProps)(Inter);

export default Intl;
