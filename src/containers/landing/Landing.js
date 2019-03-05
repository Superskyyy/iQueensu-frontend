import React from "react"
import {NavLink} from "react-router-dom";
import actions from '../../store/actions/index.js';
import { connect } from 'react-redux';
import Text from "../../components/Text";

class Landing extends React.Component{
    changeLanguage() {
        let lang = this.props.locale;
        lang = lang === 'zh' ? 'en' : 'zh';
        this.props.changeLanguage(lang);
    }
    render() {
        const { locale } = this.props;
        return(
            <React.Fragment>

                <header>
                    IQueensu
                </header>
                <section>
                    <NavLink to={"/qhousing" }>Qhousing</NavLink><br/>
                    <NavLink to={"/qucumber" }>Qucumber</NavLink>
                </section>
                <h1 className="App-title">
                    <Text
                        id="hello"
                    />
                </h1>
                <p className="App-intro">
                    <Text
                        id="test"
                        values={{ str: <b>{'Intl'}</b> }}
                    />
                </p>
                <button onClick={() => this.changeLanguage()}>{locale === 'zh' ? '切換爲英文' : 'Change to Chinese'}</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ...ownProps) => ({
    locale: state.root.language,
});
const mapDispatchToProps = (dispatch, ...ownProps) => ({
    changeLanguage: (val) => dispatch(actions.changeLanguage(val))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
