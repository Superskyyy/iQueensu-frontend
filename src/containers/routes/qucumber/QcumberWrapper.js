import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../../../components/widgets/HeaderBar/HeaderBar';

const QcumberWrapper = (props) => {
    return(<div>
            <HeaderBar hasRightAlignedItems={true} />
            {props.children}    
           </div>);
}

QcumberWrapper.propTypes = {
    children : PropTypes.element.isRequired,
}

export default QcumberWrapper