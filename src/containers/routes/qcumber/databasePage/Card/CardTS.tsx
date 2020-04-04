// Packages
import React from "react";
// Styles
import styles from "./Card.module.scss";

export interface CardProps {
    backgroundImageName: string;
    title: any;
    description: any;
}

class CardTS extends React.Component<CardProps, {}> {
    render() {
        return (
            <div className={styles.CardFront}>
                <div className={`${styles.Tile} ${styles[this.props.backgroundImageName]}`}>
                    <div className={styles.CardFrontTitle}>{this.props.title}</div>
                    <div className={styles.CardFrontDescription}>{this.props.description}</div>
                </div>
            </div>
        );
    }
}

export default CardTS;