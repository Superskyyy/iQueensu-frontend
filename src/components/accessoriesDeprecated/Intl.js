// Packages
import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
//
import en_US from "../../assets/languages/en_US";
import zh_CN from "../../assets/languages/zh_CN";

class Inter extends Component {
    render() {
        const { locale, localeMessage, children } = this.props;
        return (
            <IntlProvider key={locale} locale={locale} messages={localeMessage}>
                {children}
            </IntlProvider>
        );
    }
}

function chooseLocale(val) {
    const _val = val || navigator.language.split("_")[0];
    switch (_val) {
        case "en":
            return en_US;
        case "zh":
            return zh_CN;
        default:
            return en_US;
    }
}

const mapStateToProps = (state) => ({
    locale: state.root.language,
    localeMessage: chooseLocale(state.root.language),
});

const Intl = connect(mapStateToProps)(Inter);

export default Intl;
