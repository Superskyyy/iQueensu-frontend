# How to use this

## steps

1. Normally write your modal toggle button. Notice: you shouldn't put any attribute on your button. Also, you have to make a valid react component, not jsx literal.

    ```jsx
    const Button = (props) => {
        return <button {...props}>click to open Modal</button>;
    };
    ```

2. Write your modal content that extends [ModalContent.jsx](./ModalContent.jsx). You should call `this.props.handleClose()` when you decides to close the modal.

    ```jsx
    import react from "react";
    import ModalContent from "./ModalContent.jsx";

    class YourComponent extends ModalContent {
        render() {
            //do whatever you want
            return <button onClick={this.props.handleClose}> Click me to close </button>;
        }
    }
    ```

3. When you want to use modal, call [modalPackUp](./ModalPackUp.jsx) with first parameter your modal toggle button, second parameter a dictionary of properties you need for button, third parameter your modal content and the last parameter the properties for your modal content. Use the returned as your modal button.

    ```jsx
    render() {
        const Button = (props) => {
            return <button {...props}>click to open Modal</button>
        };
        const Modal = modalPackUp(button, {}, YourComponent, {})
        return (
            <Modal/>
        )
    }
    ```

4. Enjoy. Contact me if you‘re facing any problem
