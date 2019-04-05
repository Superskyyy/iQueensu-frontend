import React, {Component, Fragment} from 'react';
import {FormattedMessage} from "react-intl";
import PropTypes from "prop-types";

class Text extends Component {
    render() {
        return(
            <Fragment>
                <FormattedMessage
                    id = {this.props.id}
                    values = {this.props.values}
                />
            </Fragment>
        )
    }
}



Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

Text.defaultProps = {
    children: null,
};

export default Text
