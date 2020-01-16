// Packages
import React from "react";
// Styles
import styles from './Card.module.css';

//import { injectIntl } from "react-intl"

// Required: 
// background-image: the Background image of each card is in Card.css where you need to specify a path (This is a poor design needs to be fixed later)

class Card extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={styles.CardFront}>
                    <div className={`${styles.Tile} ${styles[this.props.backgroundImageName]}`}>
                        <div className={styles.CardFrontTitle}>{this.props.title}</div>
                        <div className={styles.CardFrontDescription}>{this.props.description}</div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default (Card);
