import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.table`
  justify-content: center;
  margin-bottom: 10px;
  min-width: 100%;
`;
const Button = styled.td`
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #716861;
  }
`;

export const NavItem = (props) => (
    <Fragment>
        <Button onClick={props.event} title={props.name}>{props.name}</Button>
    </Fragment>
);

export default (props) => (
    <Fragment>
        <Wrapper>
            <tbody>
                <tr>
                    {props.children}
                </tr>
            </tbody>
        </Wrapper>
    </Fragment>
);


NavItem.propTypes = {
    event: PropTypes.func,
    name: PropTypes.string,
};

NavItem.defaultProps = {
    event: undefined,
    name: "undefined",
};
