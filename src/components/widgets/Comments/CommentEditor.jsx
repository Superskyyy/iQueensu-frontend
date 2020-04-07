import React, {Component} from "react"

class CommentEditor extends Component {
    constructor() {
        super()
        this.render = this.render.bind(this)
    }

    render() {
        return (
            <div contentEditable="true">
                LALALAL
            </div>
        )
    }
}

export default CommentEditor;
