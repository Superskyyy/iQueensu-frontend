import React from "react"
import './Card.css'

//import { injectIntl } from "react-intl"

// Required: 
// background-image: the Background image of each card is in Card.css where you need to specify a path (This is a poor design needs to be fixed later)

class Card extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="CardFront">
                    <div className={'Tile '+ this.props.backgroundImageName}>
                        <div className={"CardFrontTitle"}>{this.props.title}</div>
                        <div className={"CardFrontDescription"}>{this.props.description}</div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default (Card)