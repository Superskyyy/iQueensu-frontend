import React, { Component } from 'react';
import {FormattedMessage} from "react-intl";

class Text extends Component {
    render() {
        return(
            <FormattedMessage
                id = {this.props.id}
                values={this.props.values}
            />
        )
    }
}

export default Text
