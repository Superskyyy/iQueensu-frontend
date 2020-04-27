import React from 'react'

const toggleModalOpen = () => {

}

const bindModal = (openButton, openClick, closeButton, closeClick, isOpenStateStable = false) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isOpen: isOpenStateStable
            }
            
        }

        render() {
            console.log(openButton.prototype)
            return (
                <>

                </>
            )
        }
    }
}


export default bindModal
