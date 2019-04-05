
import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  justify-content: center;
`;
export const LanBtn = (props) => (
    <Fragment>
        <Wrapper>
            {props.text}
        </Wrapper>
    </Fragment>
);

LanBtn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

LanBtn.defaultProps = {
    children: null,
};
