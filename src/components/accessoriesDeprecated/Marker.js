// Packages
import PropTypes from 'prop-types';
import React     from 'react';
// Styles
import styles from "./Marker.module.css"

// const Wrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #557fee;
//   background-image: url("../../assets/buildings.svg");
//   border: 2px solid #fff;
//   border-radius: 100%;
//   user-select: none;
//   transform: translate(-50%, -50%);
//TODO 这个地方的cursor是做什么的
//   cursor: ${props => (props.onClick ? 'pointer' : 'default')};
//   &:hover {
//     z-index: 1;
//     zoom: 120%;
//     transition: 10s linear;
//   }
// `;

const Marker = props => (
    <div className={styles.Wrapper}
        alt={props.text}
        {...props.onClick ? {onClick: props.onClick} : {}}
    />
);

Marker.defaultProps = {
    onClick: null,
};

Marker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

export default Marker;
