import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types"

const Wrapper = styled.section`
  min-width: 100%;
  justify-content: center;
  background-color: #e8e8e8;
`;

const year = new Date().getFullYear();

const Copyright = (props) => (
    <Fragment>
        <div className="Copyright-wrapper">Copyright © {props.year} {props.name} Inc. All rights reserved.</div>
    </Fragment>
);

Copyright.prototype = {
    year: PropTypes.object,
    name: PropTypes.string
};

Copyright.defaultProps = {
    year: null,
    name: null
};

const Info = (props) => (
    <Fragment>
        {props.children}
    </Fragment>
);

Info.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

Info.defaultProps = {
    children: null
};

export default () => (
    <Fragment>
        <Wrapper>
            <Info/>
            <Copyright year={year} name={"iQueensU"}/>
        </Wrapper>
    </Fragment>
);
