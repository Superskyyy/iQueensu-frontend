import React, {Component} from "react"
import * as style from "./CommentDisplay.module.scss"

class CommentDisplay extends Component {
    constructor() {
        super()
        this.render = this.render.bind(this)
    }

    render() {
        const dtformat = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        })
        const [{value: mo},,{value: da},,{value: ye}] = dtformat.formatToParts(this.props.date)

        return (
            <>
                <div className={style.commentWrapper}>
                    <div className={style.commentHeader}>
                        <div className={`${style.commentTerm} Caption`}>
                            {this.props.term}
                        </div>
                        <div className={`${style.commentProf} Caption Link`}>
                            {this.props.prof}
                        </div>
                    </div>
                    <div className={style.commentRate}>
                        <p>{this.props.rate}</p>
                    </div>
                    <div className={style.commentText}>
                        {this.props.text}
                    </div>
                    <div className={style.commentDate}>
                        {`${mo} ${da}, ${ye}`}
                    </div>
                    <div className={style.commentDivider}>
                        <hr/>
                    </div>
                </div>
            </>
        )
    }
}

export default CommentDisplay;
