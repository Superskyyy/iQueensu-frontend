
import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  justify-content: center;
`;

export const TermChoice = (props) => (
    <Fragment>
        <Wrapper>
            {props.text}
        </Wrapper>
    </Fragment>
);

TermChoice.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

TermChoice.defaultProps = {
    children: null,
};
